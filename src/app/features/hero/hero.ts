import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { HeroImageComponent } from './hero-image/hero-image';
import { ArrowBtnComponent } from '../../shared/arrow-btn/arrow-btn';
import { SocialMedia } from '../../shared/social-media/social-media';
import { Logo } from '../../shared/logo/logo';
import { BurgerMenu } from '../../shared/burger-menu/burger-menu';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hero',
  imports: [HeroImageComponent, ArrowBtnComponent, SocialMedia, Logo, BurgerMenu, CommonModule],
  templateUrl: './hero.html',
  styleUrl: './hero.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Hero {
  isMenuOpen = signal(false);

  scrollToNext(): void {
    const nextSection = document.querySelector('.about, section:nth-of-type(2)');
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
  }

  onLanguageChange(lang: 'DE' | 'EN'): void {
    console.log('Sprache gewechselt zu:', lang);
  }
}
