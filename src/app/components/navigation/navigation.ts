import { Component, signal } from '@angular/core';
import { LanguageSwitcherComponent } from '../../shared/language-switcher/language-switcher';

@Component({
  selector: 'app-navigation',
  imports: [LanguageSwitcherComponent],
  templateUrl: './navigation.html',
  styleUrl: './navigation.scss',
})
export class NavigationComponent {
  currentLanguage = signal<'DE' | 'EN'>('DE');

  menuItems = [
    { label: 'About me', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Portfolio', href: '#portfolio' },
    { label: 'Contact', href: '#contact' },
  ];

  onLanguageChange(lang: 'DE' | 'EN'): void {
    this.currentLanguage.set(lang);
  }
}
