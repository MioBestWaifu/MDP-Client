import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicWorkWidgetComponent } from './basic-work-widget.component';

describe('BasicWorkWidgetComponent', () => {
  let component: BasicWorkWidgetComponent;
  let fixture: ComponentFixture<BasicWorkWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BasicWorkWidgetComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BasicWorkWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
