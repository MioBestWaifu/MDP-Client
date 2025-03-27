import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkCreationComponent } from './work-creation.component';

describe('WorkCreationComponent', () => {
  let component: WorkCreationComponent;
  let fixture: ComponentFixture<WorkCreationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WorkCreationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WorkCreationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
