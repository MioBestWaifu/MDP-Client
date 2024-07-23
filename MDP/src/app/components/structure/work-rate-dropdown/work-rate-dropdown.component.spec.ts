import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkRateDropdownComponent } from './work-rate-dropdown.component';

describe('WorkRateDropdownComponent', () => {
  let component: WorkRateDropdownComponent;
  let fixture: ComponentFixture<WorkRateDropdownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WorkRateDropdownComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WorkRateDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
