import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Whyme } from './whyme';

describe('Whyme', () => {
  let component: Whyme;
  let fixture: ComponentFixture<Whyme>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Whyme]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Whyme);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
