import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LinkListWidgetComponent } from './link-list-widget.component';

describe('LinkListWidgetComponent', () => {
  let component: LinkListWidgetComponent;
  let fixture: ComponentFixture<LinkListWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LinkListWidgetComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LinkListWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
