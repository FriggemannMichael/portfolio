import { SkillEllipse } from './skill-ellipse';

describe('SkillEllipse', () => {
  it('should be a class', () => {
    expect(typeof SkillEllipse).toBe('function');
  });

  it('should be defined', () => {
    expect(SkillEllipse).toBeDefined();
  });

  it('should have the correct class name', () => {
    expect(SkillEllipse.name).toBe('SkillEllipse');
  });
});
