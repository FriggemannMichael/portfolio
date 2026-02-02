import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillEllipse } from './skill-ellipse';

describe('SkillEllipse', () => {
  let component: SkillEllipse;
  let fixture: ComponentFixture<SkillEllipse>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SkillEllipse],
    }).compileComponents();

    fixture = TestBed.createComponent(SkillEllipse);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should be a standalone component', () => {
    const metadata = (SkillEllipse as unknown as { ɵcmp: { standalone: boolean } }).ɵcmp;
    expect(metadata.standalone).toBe(true);
  });

  it('should render element', () => {
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled).toBeTruthy();
  });
});
