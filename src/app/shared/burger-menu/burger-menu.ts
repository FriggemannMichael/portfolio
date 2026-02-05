import {
  Component,
  output,
  signal,
  ChangeDetectionStrategy,
  effect,
  inject,
  DestroyRef,
  PLATFORM_ID,
  input,
} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { Router } from '@angular/router';
import { LanguageSwitcherComponent } from '../language-switcher/language-switcher';

@Component({
  selector: 'app-burger-menu',
  imports: [LanguageSwitcherComponent],
  templateUrl: './burger-menu.html',
  styleUrl: './burger-menu.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BurgerMenu {
  private readonly destroyRef = inject(DestroyRef);
  private readonly router = inject(Router);
  private readonly platformId = inject(PLATFORM_ID);

  isOpen = signal(false);
  showOverlay = input(true); // Default: true (für Unterseiten)

  navigate = output<string>();
  menuToggle = output<boolean>();
  close = output<void>();

  constructor() {
    // Body scroll lock effect
    effect(() => {
      if (this.isOpen()) {
        document.body.classList.add('mobile-menu-open');
      } else {
        document.body.classList.remove('mobile-menu-open');
      }
    });

    // Cleanup on destroy
    this.destroyRef.onDestroy(() => {
      document.body.classList.remove('mobile-menu-open');
    });
  }

  toggleMenu() {
    this.isOpen.update((value) => !value);
    this.menuToggle.emit(this.isOpen());
    if (!this.isOpen()) {
      this.close.emit();
    }
  }

  onNavigate(section: string) {
    this.isOpen.set(false);
    this.menuToggle.emit(false);
    this.close.emit();

    if (!isPlatformBrowser(this.platformId)) {
      return;
    }

    const element = document.getElementById(section);
    if (element) {
      // Element exists on current page - scroll to it
      element.scrollIntoView({ behavior: 'smooth' });
    } else {
      // On subpage - navigate to home with fragment
      this.router.navigate(['/'], { fragment: section });
    }

    this.navigate.emit(section);
  }
}
