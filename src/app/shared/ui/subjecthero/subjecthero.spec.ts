import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Subjecthero } from './subjecthero';

describe('Subjecthero', () => {
  let component: Subjecthero;
  let fixture: ComponentFixture<Subjecthero>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Subjecthero]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Subjecthero);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
