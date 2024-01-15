import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsAndHighlightsWidgetComponent } from './news-and-highlights-widget.component';

describe('NewsAndHighlightsWidgetComponent', () => {
  let component: NewsAndHighlightsWidgetComponent;
  let fixture: ComponentFixture<NewsAndHighlightsWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewsAndHighlightsWidgetComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NewsAndHighlightsWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
