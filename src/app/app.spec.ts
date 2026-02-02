import { App } from './app';

describe('App', () => {
  it('should be a class', () => {
    expect(typeof App).toBe('function');
  });

  it('should be defined', () => {
    expect(App).toBeDefined();
  });

  it('should have the correct class name', () => {
    expect(App.name).toBe('App');
  });
});
