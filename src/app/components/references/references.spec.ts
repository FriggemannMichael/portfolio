import { signal } from '@angular/core';
import { References } from './references';

describe('References', () => {
  it('should be a class', () => {
    expect(typeof References).toBe('function');
  });

  it('should be defined', () => {
    expect(References).toBeDefined();
  });

  it('should have the correct class name', () => {
    expect(References.name).toBe('References');
  });

  describe('References data structure', () => {
    let instance: References;

    beforeEach(() => {
      instance = new References();
    });

    it('should have 3 references', () => {
      expect(instance.references().length).toBe(3);
    });

    it('should have unique ids for each reference', () => {
      const ids = instance.references().map((r) => r.id);
      const uniqueIds = new Set(ids);
      expect(uniqueIds.size).toBe(ids.length);
    });

    it('should have nameKey for each reference', () => {
      instance.references().forEach((ref) => {
        expect(ref.nameKey).toBeTruthy();
        expect(ref.nameKey).toContain('references.items');
      });
    });

    it('should have projectKey for each reference', () => {
      instance.references().forEach((ref) => {
        expect(ref.projectKey).toBeTruthy();
        expect(ref.projectKey).toContain('.project');
      });
    });

    it('should have quoteKey for each reference', () => {
      instance.references().forEach((ref) => {
        expect(ref.quoteKey).toBeTruthy();
        expect(ref.quoteKey).toContain('.quote');
      });
    });

    it('should have linkedInUrl for each reference', () => {
      instance.references().forEach((ref) => {
        expect(ref.linkedInUrl).toBeDefined();
      });
    });

    it('should include Sahra Mueller reference', () => {
      const names = instance.references().map((r) => r.nameKey);
      expect(names).toContain('references.items.sahraMueller.name');
    });

    it('should include James Rugman reference', () => {
      const names = instance.references().map((r) => r.nameKey);
      expect(names).toContain('references.items.jamesRugman.name');
    });

    it('should include Evelyn Marx reference', () => {
      const names = instance.references().map((r) => r.nameKey);
      expect(names).toContain('references.items.evelynMarx.name');
    });
  });
});
