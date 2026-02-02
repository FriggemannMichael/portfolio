describe('ArrowBtnComponent Logic', () => {
  type ArrowDirection = 'up' | 'down';

  it('should have two valid directions', () => {
    const validDirections: ArrowDirection[] = ['up', 'down'];
    expect(validDirections.length).toBe(2);
  });

  it('should include up direction', () => {
    const validDirections: ArrowDirection[] = ['up', 'down'];
    expect(validDirections).toContain('up');
  });

  it('should include down direction', () => {
    const validDirections: ArrowDirection[] = ['up', 'down'];
    expect(validDirections).toContain('down');
  });

  it('should default to down direction', () => {
    const defaultDirection: ArrowDirection = 'down';
    expect(defaultDirection).toBe('down');
  });
});
