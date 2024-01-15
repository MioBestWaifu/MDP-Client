import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicCompanyWidgetComponent } from './basic-company-widget.component';

describe('BasicCompanyWidgetComponent', () => {
  let component: BasicCompanyWidgetComponent;
  let fixture: ComponentFixture<BasicCompanyWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BasicCompanyWidgetComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BasicCompanyWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
