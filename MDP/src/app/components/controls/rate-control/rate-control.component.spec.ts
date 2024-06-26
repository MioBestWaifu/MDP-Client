import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RateControlComponent } from './rate-control.component';

describe('RateControlComponent', () => {
  let component: RateControlComponent;
  let fixture: ComponentFixture<RateControlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RateControlComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RateControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
