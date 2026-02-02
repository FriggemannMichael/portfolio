import { Injectable, signal, computed, effect, inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { TranslocoService } from '@jsverse/transloco';

export type Language = 'de' | 'en';

@Injectable({
  providedIn: 'root',
})
export class LanguageService {
  private readonly translocoService = inject(TranslocoService);
  private readonly platformId = inject(PLATFORM_ID);
  private readonly isBrowser = isPlatformBrowser(this.platformId);

  private readonly _currentLanguage = signal<Language>(this.getInitialLanguage());

  readonly currentLanguage = this._currentLanguage.asReadonly();
  readonly isGerman = computed(() => this._currentLanguage() === 'de');
  readonly isEnglish = computed(() => this._currentLanguage() === 'en');

  private readonly languageEffect = effect(() => {
    const lang = this._currentLanguage();
    this.translocoService.setActiveLang(lang);
    this.updateHtmlLang(lang);
  });

  setLanguage(lang: Language): void {
    this._currentLanguage.set(lang);
    if (this.isBrowser) {
      localStorage.setItem('preferred-language', lang);
    }
  }

  private getInitialLanguage(): Language {
    if (this.isBrowser) {
      const stored = localStorage.getItem('preferred-language') as Language | null;
      if (stored && (stored === 'de' || stored === 'en')) {
        return stored;
      }
    }
    return 'de';
  }

  private updateHtmlLang(lang: Language): void {
    if (this.isBrowser) {
      document.documentElement.lang = lang;
    }
  }
}
