import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Navigtaion } from './navigtaion';

describe('Navigtaion', () => {
  let component: Navigtaion;
  let fixture: ComponentFixture<Navigtaion>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Navigtaion]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Navigtaion);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
