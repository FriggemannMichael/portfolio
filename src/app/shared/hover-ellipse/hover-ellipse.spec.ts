import { HoverEllipse } from './hover-ellipse';

describe('HoverEllipse', () => {
  it('should be a class', () => {
    expect(typeof HoverEllipse).toBe('function');
  });

  it('should be defined', () => {
    expect(HoverEllipse).toBeDefined();
  });

  it('should have the correct class name', () => {
    expect(HoverEllipse.name).toBe('HoverEllipse');
  });
});
