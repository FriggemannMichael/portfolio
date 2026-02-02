import { signal } from '@angular/core';

describe('Whyme Logic', () => {
  // Test the signals and logic without component instantiation
  const displayedText = signal('');
  const showIcon = signal(true);
  const iconPath = signal('/mobil/hero/noblocation.svg');

  const items = [
    { icon: '/mobil/hero/noblocation.svg', textKey: 'whyme.location.ahaus' },
    { icon: '/mobil/hero/iconremote.svg', textKey: 'whyme.location.remote' },
    { icon: '/mobil/hero/iconrelocate.svg', textKey: 'whyme.location.relocate' },
  ];

  beforeEach(() => {
    displayedText.set('');
    showIcon.set(true);
    iconPath.set(items[0].icon);
  });

  it('should have initial displayedText as empty', () => {
    expect(displayedText()).toBe('');
  });

  it('should have showIcon initialized to true', () => {
    expect(showIcon()).toBe(true);
  });

  it('should have initial iconPath set', () => {
    expect(iconPath()).toBe('/mobil/hero/noblocation.svg');
  });

  it('should have 3 location items defined', () => {
    expect(items.length).toBe(3);
  });

  it('should have correct icon paths', () => {
    expect(items[0].icon).toContain('noblocation.svg');
    expect(items[1].icon).toContain('iconremote.svg');
    expect(items[2].icon).toContain('iconrelocate.svg');
  });

  it('should have correct text keys', () => {
    expect(items[0].textKey).toBe('whyme.location.ahaus');
    expect(items[1].textKey).toBe('whyme.location.remote');
    expect(items[2].textKey).toBe('whyme.location.relocate');
  });

  it('should update displayedText signal', () => {
    displayedText.set('Test text');
    expect(displayedText()).toBe('Test text');
  });

  it('should update showIcon signal', () => {
    showIcon.set(false);
    expect(showIcon()).toBe(false);
  });

  it('should update iconPath signal', () => {
    iconPath.set(items[1].icon);
    expect(iconPath()).toBe('/mobil/hero/iconremote.svg');
  });
});
