import {
  Component,
  ChangeDetectionStrategy,
  signal,
  OnInit,
  OnDestroy,
  inject,
} from '@angular/core';
import { TranslocoDirective, TranslocoService } from '@jsverse/transloco';
import { filter, take } from 'rxjs';
import { ScrollAnimateDirective } from '../../shared/scroll-animate/scroll-animate.directive';

interface IconTextItem {
  icon: string;
  textKey: string;
}

@Component({
  selector: 'app-whyme',
  imports: [TranslocoDirective, ScrollAnimateDirective],
  templateUrl: './whyme.html',
  styleUrl: './whyme.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Whyme implements OnInit, OnDestroy {
  private readonly translocoService = inject(TranslocoService);

  private readonly items: IconTextItem[] = [
    { icon: '/mobil/hero/noblocation.svg', textKey: 'whyme.location.ahaus' },
    { icon: '/mobil/hero/iconremote.svg', textKey: 'whyme.location.remote' },
    { icon: '/mobil/hero/iconrelocate.svg', textKey: 'whyme.location.relocate' },
  ];

  private currentIndex = 0;
  private isStarted = false;

  readonly displayedText = signal('');
  readonly showIcon = signal(true);
  readonly iconPath = signal(this.items[0].icon);

  private typingInterval?: number;
  private deletingInterval?: number;
  private iconHideTimeout?: number;
  private restartTimeout?: number;

  private readonly TYPING_SPEED = 100;
  private readonly DELETING_SPEED = 50;
  private readonly PAUSE_AFTER_TYPING = 2000;
  private readonly PAUSE_AFTER_DELETING = 500;
  private readonly ICON_HIDE_DELAY = 300;

  ngOnInit(): void {
    // Warte auf die erste Übersetzung - selectTranslate wartet automatisch auf das Laden
    this.translocoService
      .selectTranslate('whyme.location.ahaus')
      .pipe(
        filter((value) => value !== 'whyme.location.ahaus'), // Warte bis tatsächlich übersetzt
        take(1),
      )
      .subscribe(() => {
        if (!this.isStarted) {
          this.isStarted = true;
          this.startTypingEffect();
        }
      });
  }

  ngOnDestroy(): void {
    this.clearAllTimers();
  }

  private getTranslatedText(key: string): string {
    return this.translocoService.translate(key);
  }

  private startTypingEffect(): void {
    this.clearAllTimers();

    const currentItem = this.items[this.currentIndex];
    this.iconPath.set(currentItem.icon);
    this.showIcon.set(true);

    let charIndex = 0;
    const fullTextValue = this.getTranslatedText(currentItem.textKey);

    this.typingInterval = window.setInterval(() => {
      if (charIndex < fullTextValue.length) {
        this.displayedText.set(fullTextValue.substring(0, charIndex + 1));
        charIndex++;
      } else {
        this.clearTypingTimer();
        this.restartTimeout = window.setTimeout(() => {
          this.startDeletingEffect();
        }, this.PAUSE_AFTER_TYPING);
      }
    }, this.TYPING_SPEED);
  }

  private startDeletingEffect(): void {
    const currentText = this.getTranslatedText(this.items[this.currentIndex].textKey);
    let charIndex = currentText.length;

    this.deletingInterval = window.setInterval(() => {
      if (charIndex > 0) {
        charIndex--;
        this.displayedText.set(currentText.substring(0, charIndex));
      } else {
        this.clearDeletingTimer();
        this.iconHideTimeout = window.setTimeout(() => {
          this.showIcon.set(false);
          this.currentIndex = (this.currentIndex + 1) % this.items.length;

          this.restartTimeout = window.setTimeout(() => {
            this.startTypingEffect();
          }, this.PAUSE_AFTER_DELETING);
        }, this.ICON_HIDE_DELAY);
      }
    }, this.DELETING_SPEED);
  }

  private clearTypingTimer(): void {
    if (this.typingInterval) {
      clearInterval(this.typingInterval);
      this.typingInterval = undefined;
    }
  }

  private clearDeletingTimer(): void {
    if (this.deletingInterval) {
      clearInterval(this.deletingInterval);
      this.deletingInterval = undefined;
    }
  }

  private clearAllTimers(): void {
    this.clearTypingTimer();
    this.clearDeletingTimer();
    if (this.iconHideTimeout) {
      clearTimeout(this.iconHideTimeout);
    }
    if (this.restartTimeout) {
      clearTimeout(this.restartTimeout);
    }
  }
}
