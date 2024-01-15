import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserInteractionWidgetComponent } from './user-interaction-widget.component';

describe('UserInteractionWidgetComponent', () => {
  let component: UserInteractionWidgetComponent;
  let fixture: ComponentFixture<UserInteractionWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserInteractionWidgetComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UserInteractionWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
