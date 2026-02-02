import { TestBed } from '@angular/core/testing';

import { NavigationComponent } from './navigation';

describe('NavigationComponent', () => {
  let component: NavigationComponent;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    component = new NavigationComponent();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have 4 menu items', () => {
    expect(component.menuItems.length).toBe(4);
  });

  it('should have correct menu item keys', () => {
    const keys = component.menuItems.map((item) => item.key);
    expect(keys).toContain('header.nav.about');
    expect(keys).toContain('header.nav.skills');
    expect(keys).toContain('header.nav.portfolio');
    expect(keys).toContain('header.nav.contact');
  });

  it('should have correct menu item hrefs', () => {
    const hrefs = component.menuItems.map((item) => item.href);
    expect(hrefs).toContain('#about');
    expect(hrefs).toContain('#skills');
    expect(hrefs).toContain('#portfolio');
    expect(hrefs).toContain('#contact');
  });

  it('should have about as first menu item', () => {
    expect(component.menuItems[0].key).toBe('header.nav.about');
    expect(component.menuItems[0].href).toBe('#about');
  });

  it('should have contact as last menu item', () => {
    const lastItem = component.menuItems[component.menuItems.length - 1];
    expect(lastItem.key).toBe('header.nav.contact');
    expect(lastItem.href).toBe('#contact');
  });
});
