import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HorizontalFolderComponent } from './horizontal-folder.component';

describe('HorizontalFolderComponent', () => {
  let component: HorizontalFolderComponent;
  let fixture: ComponentFixture<HorizontalFolderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HorizontalFolderComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HorizontalFolderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
