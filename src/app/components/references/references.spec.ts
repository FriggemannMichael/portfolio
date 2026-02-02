import { TestBed } from '@angular/core/testing';

import { References } from './references';

describe('References', () => {
  let component: References;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    component = new References();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have 3 references', () => {
    expect(component.references().length).toBe(3);
  });

  it('should have unique ids for each reference', () => {
    const ids = component.references().map((r) => r.id);
    const uniqueIds = new Set(ids);
    expect(uniqueIds.size).toBe(ids.length);
  });

  it('should have nameKey for each reference', () => {
    component.references().forEach((ref) => {
      expect(ref.nameKey).toBeTruthy();
      expect(ref.nameKey).toContain('references.items');
    });
  });

  it('should have projectKey for each reference', () => {
    component.references().forEach((ref) => {
      expect(ref.projectKey).toBeTruthy();
      expect(ref.projectKey).toContain('.project');
    });
  });

  it('should have quoteKey for each reference', () => {
    component.references().forEach((ref) => {
      expect(ref.quoteKey).toBeTruthy();
      expect(ref.quoteKey).toContain('.quote');
    });
  });

  it('should have linkedInUrl for each reference', () => {
    component.references().forEach((ref) => {
      expect(ref.linkedInUrl).toBeDefined();
    });
  });

  it('should include Sahra Mueller reference', () => {
    const names = component.references().map((r) => r.nameKey);
    expect(names).toContain('references.items.sahraMueller.name');
  });

  it('should include James Rugman reference', () => {
    const names = component.references().map((r) => r.nameKey);
    expect(names).toContain('references.items.jamesRugman.name');
  });

  it('should include Evelyn Marx reference', () => {
    const names = component.references().map((r) => r.nameKey);
    expect(names).toContain('references.items.evelynMarx.name');
  });
});
