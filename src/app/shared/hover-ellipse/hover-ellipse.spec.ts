import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HoverEllipse } from './hover-ellipse';

describe('HoverEllipse', () => {
  let component: HoverEllipse;
  let fixture: ComponentFixture<HoverEllipse>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HoverEllipse],
    }).compileComponents();

    fixture = TestBed.createComponent(HoverEllipse);
    component = fixture.componentInstance;

    // Set required inputs
    fixture.componentRef.setInput('defaultSvg', 'icon/default.svg');
    fixture.componentRef.setInput('hoverSvg', 'icon/hover.svg');

    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have null width by default', () => {
    expect(component.width()).toBeNull();
  });

  it('should have null height by default', () => {
    expect(component.height()).toBeNull();
  });

  it('should accept defaultSvg input', () => {
    expect(component.defaultSvg()).toBe('icon/default.svg');
  });

  it('should accept hoverSvg input', () => {
    expect(component.hoverSvg()).toBe('icon/hover.svg');
  });

  it('should accept custom width', () => {
    fixture.componentRef.setInput('width', 100);
    fixture.detectChanges();
    expect(component.width()).toBe(100);
  });

  it('should accept custom height', () => {
    fixture.componentRef.setInput('height', 50);
    fixture.detectChanges();
    expect(component.height()).toBe(50);
  });

  it('should be a standalone component', () => {
    const metadata = (HoverEllipse as unknown as { ɵcmp: { standalone: boolean } }).ɵcmp;
    expect(metadata.standalone).toBe(true);
  });

  it('should render element', () => {
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled).toBeTruthy();
  });
});
