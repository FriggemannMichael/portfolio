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

  private readonly _currentLanguage = signal<Language>('de');

  readonly currentLanguage = this._currentLanguage.asReadonly();
  readonly isGerman = computed(() => this._currentLanguage() === 'de');
  readonly isEnglish = computed(() => this._currentLanguage() === 'en');

  constructor() {
    effect(() => {
      const lang = this._currentLanguage();
      this.translocoService.setActiveLang(lang);
      this.updateHtmlLang(lang);
    });

    this.initializeLanguage();
  }

  setLanguage(lang: Language): void {
    this._currentLanguage.set(lang);
    if (isPlatformBrowser(this.platformId)) {
      localStorage.setItem('preferred-language', lang);
    }
  }

  private initializeLanguage(): void {
    if (isPlatformBrowser(this.platformId)) {
      const stored = localStorage.getItem('preferred-language') as Language | null;
      if (stored && (stored === 'de' || stored === 'en')) {
        this._currentLanguage.set(stored);
      }
    }
  }

  private updateHtmlLang(lang: Language): void {
    if (isPlatformBrowser(this.platformId)) {
      document.documentElement.lang = lang;
    }
  }
}
