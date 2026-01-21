import { Component, ChangeDetectionStrategy, signal, OnInit, OnDestroy } from '@angular/core';

interface IconTextItem {
  icon: string;
  text: string;
}

@Component({
  selector: 'app-whyme',
  imports: [],
  templateUrl: './whyme.html',
  styleUrl: './whyme.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Whyme implements OnInit, OnDestroy {
  private readonly items: IconTextItem[] = [
    { icon: '/mobil/hero/noblocation.svg', text: ' located in Ahaus.' },
    { icon: '/mobil/hero/iconremote.svg', text: '  open to work remote ...' },
    { icon: '/mobil/hero/iconrelocate.svg', text: ' not open to relocate!' },
  ];

  private currentIndex = 0;

  readonly displayedText = signal('');
  readonly showIcon = signal(true);
  readonly iconPath = signal(this.items[0].icon);

  readonly descriptionText = signal(
    'Your description text goes here. This is where you explain why someone should choose you.',
  );

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
    this.startTypingEffect();
  }

  ngOnDestroy(): void {
    this.clearAllTimers();
  }

  private startTypingEffect(): void {
    const currentItem = this.items[this.currentIndex];
    this.iconPath.set(currentItem.icon);
    this.showIcon.set(true);

    let charIndex = 0;
    const fullTextValue = currentItem.text;

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
    let charIndex = this.displayedText().length;

    this.deletingInterval = window.setInterval(() => {
      if (charIndex > 0) {
        charIndex--;
        this.displayedText.set(this.items[this.currentIndex].text.substring(0, charIndex));
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
