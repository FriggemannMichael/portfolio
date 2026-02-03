import {
  ChangeDetectionStrategy,
  Component,
  signal,
  HostListener,
  ViewChild,
} from '@angular/core';
import { HeroImageComponent } from './hero-image/hero-image';
import { ArrowBtnComponent } from '../../shared/arrow-btn/arrow-btn';
import { SocialMedia } from '../../shared/social-media/social-media';
import { Logo } from '../../shared/logo/logo';
import { BurgerMenu } from '../../shared/burger-menu/burger-menu';
import { LanguageSwitcherComponent } from '../../shared/language-switcher/language-switcher';
import { TranslocoDirective } from '@jsverse/transloco';
import { NavigationComponent } from '../navigation/navigation';

@Component({
  selector: 'app-hero',
  imports: [
    HeroImageComponent,
    ArrowBtnComponent,
    SocialMedia,
    Logo,
    BurgerMenu,
    LanguageSwitcherComponent,
    TranslocoDirective,
    NavigationComponent
  ],
  templateUrl: './hero.html',
  styleUrl: './hero.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Hero {
  isMenuOpen = signal(false);

  @ViewChild(BurgerMenu) burgerMenu!: BurgerMenu;

  @HostListener('window:resize')
  onResize(): void {
    if (this.isMenuOpen()) {
      this.closeMenu();
    }
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent): void {
    if (!this.isMenuOpen()) return;

    const target = event.target as HTMLElement;
    const clickedInsideMenu = target.closest('.menu-container');
    const clickedBurgerButton = target.closest('.burger-icon');

    if (!clickedInsideMenu && !clickedBurgerButton) {
      this.closeMenu();
    }
  }

  closeMenu(): void {
    this.isMenuOpen.set(false);
    this.toggleBodyScroll(false);
    if (this.burgerMenu) {
      this.burgerMenu.isOpen.set(false);
    }
  }

  scrollToNext(): void {
    const nextSection = document.querySelector('.why-me');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  }

  onNavigate(section: string): void {
    const sectionElement = document.querySelector(`.${section}`);
    if (sectionElement) {
      sectionElement.scrollIntoView({ behavior: 'smooth' });
    }
  }

  onMenuToggle(isOpen: boolean): void {
    this.isMenuOpen.set(isOpen);
    this.toggleBodyScroll(isOpen);
  }

  private toggleBodyScroll(lock: boolean): void {
    document.body.style.overflow = lock ? 'hidden' : '';
  }

  onLanguageChange(lang: 'DE' | 'EN'): void {
    // Language change handled by LanguageSwitcher
  }
}
