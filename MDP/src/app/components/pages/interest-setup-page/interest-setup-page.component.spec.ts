import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InterestSetupPageComponent } from './interest-setup-page.component';

describe('InterestSetupPageComponent', () => {
  let component: InterestSetupPageComponent;
  let fixture: ComponentFixture<InterestSetupPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InterestSetupPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InterestSetupPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
