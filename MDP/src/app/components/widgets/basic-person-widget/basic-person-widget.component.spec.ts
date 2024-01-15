import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicPersonWidgetComponent } from './basic-person-widget.component';

describe('BasicPersonWidgetComponent', () => {
  let component: BasicPersonWidgetComponent;
  let fixture: ComponentFixture<BasicPersonWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BasicPersonWidgetComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BasicPersonWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
