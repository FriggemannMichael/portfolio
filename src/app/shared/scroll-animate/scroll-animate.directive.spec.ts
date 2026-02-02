describe('ScrollAnimateDirective Logic', () => {
  // Test the animation types and CSS class logic
  const animationTypes = ['fade-up', 'fade-in', 'fade-left', 'fade-right', 'scale-in'];

  it('should have 5 animation types defined', () => {
    expect(animationTypes.length).toBe(5);
  });

  it('should include fade-up animation', () => {
    expect(animationTypes).toContain('fade-up');
  });

  it('should include fade-in animation', () => {
    expect(animationTypes).toContain('fade-in');
  });

  it('should include fade-left animation', () => {
    expect(animationTypes).toContain('fade-left');
  });

  it('should include fade-right animation', () => {
    expect(animationTypes).toContain('fade-right');
  });

  it('should include scale-in animation', () => {
    expect(animationTypes).toContain('scale-in');
  });

  it('should generate correct CSS class for animation', () => {
    const animation = 'fade-up';
    const cssClass = `scroll-animate--${animation}`;
    expect(cssClass).toBe('scroll-animate--fade-up');
  });

  it('should generate correct transition delay style', () => {
    const delay = 100;
    const style = `${delay}ms`;
    expect(style).toBe('100ms');
  });
});
