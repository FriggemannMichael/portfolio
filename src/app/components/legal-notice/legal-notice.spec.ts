import { LegalNotice } from './legal-notice';

describe('LegalNotice', () => {
  it('should be a class', () => {
    expect(typeof LegalNotice).toBe('function');
  });

  it('should be defined', () => {
    expect(LegalNotice).toBeDefined();
  });

  it('should have the correct class name', () => {
    expect(LegalNotice.name).toBe('LegalNotice');
  });

  it('should have onMenuToggle method on prototype', () => {
    expect(typeof LegalNotice.prototype.onMenuToggle).toBe('function');
  });
});
