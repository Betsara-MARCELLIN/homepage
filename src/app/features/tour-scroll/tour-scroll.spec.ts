import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TourScroll } from './tour-scroll';

describe('TourScroll', () => {
  let component: TourScroll;
  let fixture: ComponentFixture<TourScroll>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TourScroll]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TourScroll);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
