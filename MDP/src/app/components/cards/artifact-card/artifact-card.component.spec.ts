import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtifactCardComponent } from './artifact-card.component';

describe('AritifactCardComponent', () => {
  let component: ArtifactCardComponent;
  let fixture: ComponentFixture<ArtifactCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArtifactCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ArtifactCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
