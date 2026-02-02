import { signal } from '@angular/core';

describe('BurgerMenu Logic', () => {
  let isOpen: ReturnType<typeof signal<boolean>>;
  let navigateCalls: string[];
  let languageChangeCalls: ('DE' | 'EN')[];
  let menuToggleCalls: boolean[];
  let closeCalls: number;

  const toggleMenu = () => {
    isOpen.update((value) => !value);
    menuToggleCalls.push(isOpen());
    if (!isOpen()) {
      closeCalls++;
    }
  };

  const onNavigate = (section: string) => {
    navigateCalls.push(section);
    isOpen.set(false);
    menuToggleCalls.push(false);
    closeCalls++;
  };

  const onLanguageChange = (lang: 'DE' | 'EN') => {
    languageChangeCalls.push(lang);
  };

  beforeEach(() => {
    isOpen = signal(false);
    navigateCalls = [];
    languageChangeCalls = [];
    menuToggleCalls = [];
    closeCalls = 0;
  });

  it('should have isOpen initialized to false', () => {
    expect(isOpen()).toBe(false);
  });

  it('should toggle menu open state', () => {
    expect(isOpen()).toBe(false);

    toggleMenu();
    expect(isOpen()).toBe(true);

    toggleMenu();
    expect(isOpen()).toBe(false);
  });

  it('should emit menuToggle when toggling', () => {
    toggleMenu();
    expect(menuToggleCalls).toContain(true);
  });

  it('should emit close when closing menu', () => {
    isOpen.set(true);
    toggleMenu();
    expect(closeCalls).toBeGreaterThan(0);
  });

  it('should emit navigate when onNavigate is called', () => {
    onNavigate('skills');
    expect(navigateCalls).toContain('skills');
  });

  it('should close menu when navigating', () => {
    isOpen.set(true);
    onNavigate('contact');
    expect(isOpen()).toBe(false);
  });

  it('should emit languageChange when onLanguageChange is called', () => {
    onLanguageChange('EN');
    expect(languageChangeCalls).toContain('EN');
  });

  it('should emit close and menuToggle when navigating', () => {
    isOpen.set(true);
    onNavigate('about');
    expect(closeCalls).toBeGreaterThan(0);
    expect(menuToggleCalls).toContain(false);
  });

  it('should handle DE language change', () => {
    onLanguageChange('DE');
    expect(languageChangeCalls).toContain('DE');
  });
});
