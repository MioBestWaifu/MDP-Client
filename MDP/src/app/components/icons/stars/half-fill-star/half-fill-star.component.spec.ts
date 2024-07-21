import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HalfFillStarComponent } from './half-fill-star.component';

describe('HalfFillStarComponent', () => {
  let component: HalfFillStarComponent;
  let fixture: ComponentFixture<HalfFillStarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HalfFillStarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HalfFillStarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
