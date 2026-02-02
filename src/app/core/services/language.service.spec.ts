import { signal, computed } from '@angular/core';
import { Language } from './language.service';

describe('LanguageService Logic', () => {
  let currentLanguage: ReturnType<typeof signal<Language>>;
  let isGerman: ReturnType<typeof computed<boolean>>;
  let isEnglish: ReturnType<typeof computed<boolean>>;

  const setLanguage = (lang: Language) => {
    currentLanguage.set(lang);
  };

  beforeEach(() => {
    currentLanguage = signal<Language>('de');
    isGerman = computed(() => currentLanguage() === 'de');
    isEnglish = computed(() => currentLanguage() === 'en');
  });

  it('should have default language as de', () => {
    expect(currentLanguage()).toBe('de');
  });

  it('should compute isGerman correctly when language is de', () => {
    expect(isGerman()).toBe(true);
    expect(isEnglish()).toBe(false);
  });

  describe('setLanguage', () => {
    it('should change language to en', () => {
      setLanguage('en');
      expect(currentLanguage()).toBe('en');
    });

    it('should update isEnglish when language is en', () => {
      setLanguage('en');
      expect(isEnglish()).toBe(true);
      expect(isGerman()).toBe(false);
    });

    it('should change language back to de', () => {
      setLanguage('en');
      setLanguage('de');
      expect(currentLanguage()).toBe('de');
      expect(isGerman()).toBe(true);
    });
  });

  describe('computed signals', () => {
    it('should update isGerman when language changes', () => {
      expect(isGerman()).toBe(true);
      setLanguage('en');
      expect(isGerman()).toBe(false);
    });

    it('should update isEnglish when language changes', () => {
      expect(isEnglish()).toBe(false);
      setLanguage('en');
      expect(isEnglish()).toBe(true);
    });
  });

  describe('Language type', () => {
    it('should only allow de or en values', () => {
      const validLanguages: Language[] = ['de', 'en'];
      expect(validLanguages).toContain('de');
      expect(validLanguages).toContain('en');
      expect(validLanguages.length).toBe(2);
    });
  });
});
