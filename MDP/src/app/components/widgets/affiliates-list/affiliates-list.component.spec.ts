import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AffiliatesListComponent } from './affiliates-list.component';

describe('AffiliatesListComponent', () => {
  let component: AffiliatesListComponent;
  let fixture: ComponentFixture<AffiliatesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AffiliatesListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AffiliatesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
