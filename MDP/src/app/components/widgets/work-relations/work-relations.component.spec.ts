import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkRelationsComponent } from './work-relations.component';

describe('WorkRelationsComponent', () => {
  let component: WorkRelationsComponent;
  let fixture: ComponentFixture<WorkRelationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WorkRelationsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WorkRelationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
