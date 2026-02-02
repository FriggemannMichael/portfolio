import { TestBed } from '@angular/core/testing';

import { SocialMedia } from './social-media';

describe('SocialMedia', () => {
  let component: SocialMedia;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    component = new SocialMedia();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have emailHover initialized to false', () => {
    expect(component.emailHover()).toBe(false);
  });

  it('should have githubHover initialized to false', () => {
    expect(component.githubHover()).toBe(false);
  });

  it('should have linkedinHover initialized to false', () => {
    expect(component.linkedinHover()).toBe(false);
  });

  it('should have socialLinks defined', () => {
    expect(component.socialLinks).toBeTruthy();
    expect(component.socialLinks.email).toContain('mailto:');
    expect(component.socialLinks.github).toContain('github.com');
    expect(component.socialLinks.linkedin).toContain('linkedin.com');
  });

  describe('setHover', () => {
    it('should set email hover state', () => {
      component.setHover('email', true);
      expect(component.emailHover()).toBe(true);

      component.setHover('email', false);
      expect(component.emailHover()).toBe(false);
    });

    it('should set github hover state', () => {
      component.setHover('github', true);
      expect(component.githubHover()).toBe(true);

      component.setHover('github', false);
      expect(component.githubHover()).toBe(false);
    });

    it('should set linkedin hover state', () => {
      component.setHover('linkedin', true);
      expect(component.linkedinHover()).toBe(true);

      component.setHover('linkedin', false);
      expect(component.linkedinHover()).toBe(false);
    });
  });

  it('should have all three social links', () => {
    expect(component.socialLinks.email).toBeTruthy();
    expect(component.socialLinks.github).toBeTruthy();
    expect(component.socialLinks.linkedin).toBeTruthy();
  });
});
