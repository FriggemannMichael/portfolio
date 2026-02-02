import { TestBed } from '@angular/core/testing';

import { Footer } from './footer';

describe('Footer', () => {
  let component: Footer;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    component = new Footer();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have currentYear set to current year', () => {
    expect(component.currentYear).toBe(new Date().getFullYear());
  });

  it('should have 3 social links', () => {
    expect(component.socialLinks.length).toBe(3);
  });

  it('should have GitHub social link', () => {
    const github = component.socialLinks.find((link) => link.name === 'GitHub');
    expect(github).toBeTruthy();
    expect(github?.url).toContain('github.com');
  });

  it('should have Email social link', () => {
    const email = component.socialLinks.find((link) => link.name === 'Email');
    expect(email).toBeTruthy();
    expect(email?.url).toContain('mailto:');
  });

  it('should have LinkedIn social link', () => {
    const linkedin = component.socialLinks.find((link) => link.name === 'LinkedIn');
    expect(linkedin).toBeTruthy();
    expect(linkedin?.url).toContain('linkedin.com');
  });

  it('should have icon and hoverIcon for each social link', () => {
    component.socialLinks.forEach((link) => {
      expect(link.icon).toBeTruthy();
      expect(link.hoverIcon).toBeTruthy();
      expect(link.icon).toContain('.svg');
      expect(link.hoverIcon).toContain('.svg');
    });
  });

  it('should have name for each social link', () => {
    component.socialLinks.forEach((link) => {
      expect(link.name).toBeTruthy();
    });
  });

  it('should have url for each social link', () => {
    component.socialLinks.forEach((link) => {
      expect(link.url).toBeTruthy();
    });
  });
});
