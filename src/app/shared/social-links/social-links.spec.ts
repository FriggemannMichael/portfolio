import { SocialLinks } from './social-links';

describe('SocialLinks', () => {
  it('should be a class', () => {
    expect(typeof SocialLinks).toBe('function');
  });

  it('should be defined', () => {
    expect(SocialLinks).toBeDefined();
  });

  it('should have the correct class name', () => {
    expect(SocialLinks.name).toBe('SocialLinks');
  });
});
