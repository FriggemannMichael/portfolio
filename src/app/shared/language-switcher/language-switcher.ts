import { Component, signal, output } from '@angular/core';
import { CommonModule } from '@angular/common';

type Language = 'DE' | 'EN';

@Component({
  selector: 'app-language-switcher',
  imports: [CommonModule],
  templateUrl: './language-switcher.html',
  styleUrl: './language-switcher.scss',
})
export class LanguageSwitcherComponent {
  currentLanguage = signal<Language>('DE');
  languageChange = output<Language>();

  selectLanguage(lang: Language): void {
    this.currentLanguage.set(lang);
    this.languageChange.emit(lang);
  }
}
