import { TestBed } from '@angular/core/testing';

import { Skills } from './skills';

describe('Skills', () => {
  let component: Skills;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    component = new Skills();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have 10 main skills', () => {
    expect(component.skills().length).toBe(10);
  });

  it('should have 2 learning skills', () => {
    expect(component.learningSkills().length).toBe(2);
  });

  it('should include Angular in skills', () => {
    const skillNames = component.skills().map((s) => s.name);
    expect(skillNames).toContain('Angular');
  });

  it('should include TypeScript in skills', () => {
    const skillNames = component.skills().map((s) => s.name);
    expect(skillNames).toContain('TypeScript');
  });

  it('should include JavaScript in skills', () => {
    const skillNames = component.skills().map((s) => s.name);
    expect(skillNames).toContain('JavaScript');
  });

  it('should include HTML in skills', () => {
    const skillNames = component.skills().map((s) => s.name);
    expect(skillNames).toContain('HTML');
  });

  it('should include CSS in skills', () => {
    const skillNames = component.skills().map((s) => s.name);
    expect(skillNames).toContain('CSS');
  });

  it('should include React in learning skills', () => {
    const learningNames = component.learningSkills().map((s) => s.name);
    expect(learningNames).toContain('React');
  });

  it('should include Vue Js in learning skills', () => {
    const learningNames = component.learningSkills().map((s) => s.name);
    expect(learningNames).toContain('Vue Js');
  });

  it('should have icon for each skill', () => {
    component.skills().forEach((skill) => {
      expect(skill.icon).toBeTruthy();
      expect(skill.icon).toContain('.svg');
    });
  });

  it('should have icon for each learning skill', () => {
    component.learningSkills().forEach((skill) => {
      expect(skill.icon).toBeTruthy();
      expect(skill.icon).toContain('.svg');
    });
  });
});
