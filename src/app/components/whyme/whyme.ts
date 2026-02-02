import {
  Component,
  ChangeDetectionStrategy,
  signal,
  OnInit,
  OnDestroy,
  inject,
  PLATFORM_ID,
} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
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
  private readonly platformId = inject(PLATFORM_ID);
  private readonly isBrowser = isPlatformBrowser(this.platformId);

  private readonly items: IconTextItem[] = [
    { icon: '/mobil/hero/noblocation.svg', textKey: 'whyme.location.ahaus' },
    { icon: '/mobil/hero/iconremote.svg', textKey: 'whyme.location.remote' },
    { icon: '/mobil/hero/iconrelocate.svg', textKey: 'whyme.location.relocate' },
  ];

  private currentIndex = 0;
  private isStarted = false;

  readonly displayedText = signal('');
  readonly iconVisible = signal(true);
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
    if (!this.isBrowser) {
      return;
    }

    this.waitForTranslationAndStart();
  }

  ngOnDestroy(): void {
    this.clearAllTimers();
  }

  private waitForTranslationAndStart(): void {
    this.translocoService
      .selectTranslate('whyme.location.ahaus')
      .pipe(
        filter((value) => value !== 'whyme.location.ahaus'),
        take(1),
      )
      .subscribe(() => {
        if (!this.isStarted) {
          this.isStarted = true;
          this.startTypingEffect();
        }
      });
  }

  private getTranslatedText(key: string): string {
    return this.translocoService.translate(key);
  }

  private startTypingEffect(): void {
    this.clearAllTimers();
    this.prepareNextItem();
    this.animateTyping();
  }

  private prepareNextItem(): void {
    const currentItem = this.items[this.currentIndex];
    this.iconPath.set(currentItem.icon);
    this.iconVisible.set(true);
  }

  private animateTyping(): void {
    let charIndex = 0;
    const fullTextValue = this.getCurrentTranslatedText();

    this.typingInterval = window.setInterval(() => {
      if (charIndex < fullTextValue.length) {
        this.typeNextCharacter(fullTextValue, charIndex);
        charIndex++;
      } else {
        this.finishTyping();
      }
    }, this.TYPING_SPEED);
  }

  private getCurrentTranslatedText(): string {
    const currentItem = this.items[this.currentIndex];
    return this.getTranslatedText(currentItem.textKey);
  }

  private typeNextCharacter(fullText: string, charIndex: number): void {
    this.displayedText.set(fullText.substring(0, charIndex + 1));
  }

  private finishTyping(): void {
    this.clearTypingTimer();
    this.scheduleDeleting();
  }

  private scheduleDeleting(): void {
    this.restartTimeout = window.setTimeout(() => {
      this.startDeletingEffect();
    }, this.PAUSE_AFTER_TYPING);
  }

  private startDeletingEffect(): void {
    const currentText = this.getCurrentTranslatedText();
    this.animateDeleting(currentText);
  }

  private animateDeleting(currentText: string): void {
    let charIndex = currentText.length;

    this.deletingInterval = window.setInterval(() => {
      if (charIndex > 0) {
        this.deleteNextCharacter(currentText, charIndex);
        charIndex--;
      } else {
        this.finishDeleting();
      }
    }, this.DELETING_SPEED);
  }

  private deleteNextCharacter(currentText: string, charIndex: number): void {
    this.displayedText.set(currentText.substring(0, charIndex - 1));
  }

  private finishDeleting(): void {
    this.clearDeletingTimer();
    this.scheduleNextCycle();
  }

  private scheduleNextCycle(): void {
    this.iconHideTimeout = window.setTimeout(() => {
      this.hideIconAndAdvance();
    }, this.ICON_HIDE_DELAY);
  }

  private hideIconAndAdvance(): void {
    this.iconVisible.set(false);
    this.advanceToNextItem();
    this.scheduleNextTyping();
  }

  private advanceToNextItem(): void {
    this.currentIndex = (this.currentIndex + 1) % this.items.length;
  }

  private scheduleNextTyping(): void {
    this.restartTimeout = window.setTimeout(() => {
      this.startTypingEffect();
    }, this.PAUSE_AFTER_DELETING);
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

  scrollToContact(): void {
    if (!this.isBrowser) {
      return;
    }
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
