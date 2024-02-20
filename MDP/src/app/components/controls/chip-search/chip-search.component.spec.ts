import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChipSearchComponent } from './chip-search.component';

describe('ChipSearchComponent', () => {
  let component: ChipSearchComponent;
  let fixture: ComponentFixture<ChipSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChipSearchComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ChipSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
