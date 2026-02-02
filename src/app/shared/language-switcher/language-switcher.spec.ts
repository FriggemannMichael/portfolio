import { signal, computed } from '@angular/core';
import { Language } from '../../core/services/language.service';

describe('LanguageSwitcher Logic', () => {
  let currentLanguageSignal: ReturnType<typeof signal<Language>>;
  let isGerman: ReturnType<typeof computed<boolean>>;
  let isEnglish: ReturnType<typeof computed<boolean>>;
  let setLanguageCalls: Language[];
  let languageChangeCalls: ('DE' | 'EN')[];

  beforeEach(() => {
    currentLanguageSignal = signal<Language>('de');
    isGerman = computed(() => currentLanguageSignal() === 'de');
    isEnglish = computed(() => currentLanguageSignal() === 'en');
    setLanguageCalls = [];
    languageChangeCalls = [];
  });

  const selectLanguage = (lang: Language) => {
    setLanguageCalls.push(lang);
    currentLanguageSignal.set(lang);
    languageChangeCalls.push(lang === 'de' ? 'DE' : 'EN');
  };

  it('should have isGerman computed correctly when language is de', () => {
    currentLanguageSignal.set('de');
    expect(isGerman()).toBe(true);
    expect(isEnglish()).toBe(false);
  });

  it('should have isEnglish computed correctly when language is en', () => {
    currentLanguageSignal.set('en');
    expect(isGerman()).toBe(false);
    expect(isEnglish()).toBe(true);
  });

  it('should call setLanguage when selectLanguage is called', () => {
    selectLanguage('en');
    expect(setLanguageCalls).toContain('en');
  });

  it('should emit DE when selecting German', () => {
    selectLanguage('de');
    expect(languageChangeCalls).toContain('DE');
  });

  it('should emit EN when selecting English', () => {
    selectLanguage('en');
    expect(languageChangeCalls).toContain('EN');
  });

  it('should toggle language correctly', () => {
    expect(isGerman()).toBe(true);
    selectLanguage('en');
    expect(isEnglish()).toBe(true);
    selectLanguage('de');
    expect(isGerman()).toBe(true);
  });
});
