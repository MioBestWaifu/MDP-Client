import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavigationIconsComponent } from './navigation-icons.component';

describe('NavigationIconsComponent', () => {
  let component: NavigationIconsComponent;
  let fixture: ComponentFixture<NavigationIconsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavigationIconsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NavigationIconsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
