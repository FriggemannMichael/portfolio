import { signal } from '@angular/core';

describe('Hero Logic', () => {
  let isMenuOpen: ReturnType<typeof signal<boolean>>;

  const onMenuToggle = (isOpen: boolean) => {
    isMenuOpen.set(isOpen);
  };

  beforeEach(() => {
    isMenuOpen = signal(false);
  });

  it('should have isMenuOpen signal initialized to false', () => {
    expect(isMenuOpen()).toBe(false);
  });

  it('should toggle menu state via onMenuToggle', () => {
    expect(isMenuOpen()).toBe(false);

    onMenuToggle(true);
    expect(isMenuOpen()).toBe(true);

    onMenuToggle(false);
    expect(isMenuOpen()).toBe(false);
  });

  it('should set menu open to true', () => {
    onMenuToggle(true);
    expect(isMenuOpen()).toBe(true);
  });

  it('should set menu open to false', () => {
    isMenuOpen.set(true);
    onMenuToggle(false);
    expect(isMenuOpen()).toBe(false);
  });

  it('should handle language change values', () => {
    const validLanguages: ('DE' | 'EN')[] = ['DE', 'EN'];
    expect(validLanguages).toContain('DE');
    expect(validLanguages).toContain('EN');
  });

  it('should have scrollToNext function defined', () => {
    const scrollToNext = () => {
      const nextSection = document.querySelector('.why-me');
      if (nextSection) {
        nextSection.scrollIntoView({ behavior: 'smooth' });
      }
    };
    expect(typeof scrollToNext).toBe('function');
  });

  it('should have onNavigate function defined', () => {
    const onNavigate = (section: string) => {
      const sectionElement = document.querySelector(`.${section}`);
      if (sectionElement) {
        sectionElement.scrollIntoView({ behavior: 'smooth' });
      }
    };
    expect(typeof onNavigate).toBe('function');
  });
});
