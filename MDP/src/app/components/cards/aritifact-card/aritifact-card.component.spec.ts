import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AritifactCardComponent } from './aritifact-card.component';

describe('AritifactCardComponent', () => {
  let component: AritifactCardComponent;
  let fixture: ComponentFixture<AritifactCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AritifactCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AritifactCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
