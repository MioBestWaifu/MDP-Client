import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InterestUpdatePageComponent } from './interest-update-page.component';

describe('InterestUpdatePageComponent', () => {
  let component: InterestUpdatePageComponent;
  let fixture: ComponentFixture<InterestUpdatePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InterestUpdatePageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InterestUpdatePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
