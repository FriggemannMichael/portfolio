import { Component } from '@angular/core';
import { LanguageSwitcherComponent } from '../../shared/language-switcher/language-switcher';
import { TranslocoDirective } from '@jsverse/transloco';

@Component({
  selector: 'app-navigation',
  imports: [LanguageSwitcherComponent, TranslocoDirective],
  templateUrl: './navigation.html',
  styleUrl: './navigation.scss',
})
export class NavigationComponent {
  menuItems = [
    { key: 'header.nav.about', href: '#about' },
    { key: 'header.nav.skills', href: '#skills' },
    { key: 'header.nav.portfolio', href: '#portfolio' },
    { key: 'header.nav.contact', href: '#contact' },
  ];
}
