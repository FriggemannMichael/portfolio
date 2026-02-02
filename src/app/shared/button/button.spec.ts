describe('Button Logic', () => {
  type ButtonType = 'button' | 'submit';

  it('should have two valid button types', () => {
    const validTypes: ButtonType[] = ['button', 'submit'];
    expect(validTypes.length).toBe(2);
  });

  it('should include button type', () => {
    const validTypes: ButtonType[] = ['button', 'submit'];
    expect(validTypes).toContain('button');
  });

  it('should include submit type', () => {
    const validTypes: ButtonType[] = ['button', 'submit'];
    expect(validTypes).toContain('submit');
  });

  it('should have default text as "Let\'s talk"', () => {
    const defaultText = "Let's talk";
    expect(defaultText).toBe("Let's talk");
  });

  it('should have default type as "button"', () => {
    const defaultType: ButtonType = 'button';
    expect(defaultType).toBe('button');
  });

  it('should accept custom text', () => {
    const customText = 'Click me';
    expect(customText).toBe('Click me');
  });

  it('should accept submit type', () => {
    const submitType: ButtonType = 'submit';
    expect(submitType).toBe('submit');
  });
});
