import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerticalFolderComponent } from './vertical-folder.component';

describe('VerticalFolderComponent', () => {
  let component: VerticalFolderComponent;
  let fixture: ComponentFixture<VerticalFolderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VerticalFolderComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VerticalFolderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
