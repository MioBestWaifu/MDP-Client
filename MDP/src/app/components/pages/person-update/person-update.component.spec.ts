import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonUpdateComponent } from './person-update.component';

describe('PersonUpdateComponent', () => {
  let component: PersonUpdateComponent;
  let fixture: ComponentFixture<PersonUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PersonUpdateComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PersonUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
