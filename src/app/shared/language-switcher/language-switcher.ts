import { Component, computed, inject, input, output } from '@angular/core';
import { LanguageService, Language } from '../../core/services/language.service';
import { TranslocoDirective } from '@jsverse/transloco';

@Component({
  selector: 'app-language-switcher',
  imports: [TranslocoDirective],
  templateUrl: './language-switcher.html',
  styleUrl: './language-switcher.scss',
  host: {
    '[class.compact]': 'variant() === "compact"',
  },
})
export class LanguageSwitcherComponent {
  readonly variant = input<'default' | 'compact'>('default');
  private readonly languageService = inject(LanguageService);

  readonly isGerman = computed(() => this.languageService.currentLanguage() === 'de');
  readonly isEnglish = computed(() => this.languageService.currentLanguage() === 'en');

  languageChange = output<'DE' | 'EN'>();

  selectLanguage(lang: Language): void {
    this.languageService.setLanguage(lang);
    this.languageChange.emit(lang === 'de' ? 'DE' : 'EN');
  }
}
