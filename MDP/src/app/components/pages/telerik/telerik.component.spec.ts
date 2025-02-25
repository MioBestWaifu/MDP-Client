import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TelerikComponent } from './telerik.component';

describe('TelerikComponent', () => {
  let component: TelerikComponent;
  let fixture: ComponentFixture<TelerikComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TelerikComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TelerikComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
