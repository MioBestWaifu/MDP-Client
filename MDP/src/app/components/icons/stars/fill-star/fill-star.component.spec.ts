import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FillStarComponent } from './fill-star.component';

describe('FillStarComponent', () => {
  let component: FillStarComponent;
  let fixture: ComponentFixture<FillStarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FillStarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FillStarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
