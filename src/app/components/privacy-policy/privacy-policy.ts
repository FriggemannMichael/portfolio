import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslocoDirective } from '@jsverse/transloco';
import { ScrollAnimateDirective } from '../../shared/scroll-animate/scroll-animate.directive';
import { Footer } from '../footer/footer';
import { NavigationComponent } from '../navigation/navigation';
import { Logo } from '../../shared/logo/logo';
import { BurgerMenu } from '../../shared/burger-menu/burger-menu';

@Component({
  selector: 'app-privacy-policy',
  imports: [TranslocoDirective, ScrollAnimateDirective, Footer, NavigationComponent, RouterLink, Logo, BurgerMenu],
  templateUrl: './privacy-policy.html',
  styleUrl: './privacy-policy.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PrivacyPolicy {
  isMenuOpen = signal(false);

  onMenuToggle(isOpen: boolean): void {
    this.isMenuOpen.set(isOpen);
  }
}
