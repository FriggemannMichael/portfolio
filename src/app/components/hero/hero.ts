import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
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

    // Body-Scroll Lock
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }

  onLanguageChange(lang: 'DE' | 'EN'): void {
    console.log('Sprache gewechselt zu:', lang);
  }
}
