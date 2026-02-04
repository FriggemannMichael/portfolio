import { Component, inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { Router } from '@angular/router';
import { LanguageSwitcherComponent } from '../../shared/language-switcher/language-switcher';
import { TranslocoDirective } from '@jsverse/transloco';

@Component({
  selector: 'app-navigation',
  imports: [LanguageSwitcherComponent, TranslocoDirective],
  templateUrl: './navigation.html',
  styleUrl: './navigation.scss',
})
export class NavigationComponent {
  private platformId = inject(PLATFORM_ID);
  private router = inject(Router);

  menuItems = [
    { key: 'header.nav.about', target: 'about' },
    { key: 'header.nav.skills', target: 'skills' },
    { key: 'header.nav.portfolio', target: 'portfolio' },
    { key: 'header.nav.contact', target: 'contact' },
  ];

  scrollTo(target: string): void {
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }

    const element = document.getElementById(target);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    } else {
      // Auf Unterseite: Zur Hauptseite navigieren mit Fragment
      this.router.navigate(['/'], { fragment: target });
    }
  }
}
