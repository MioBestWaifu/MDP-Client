import { Component, Input } from '@angular/core';
import { Artifact } from '../../../models/artifacts/artifact';
import { Accessory } from '../../../models/artifacts/accessory';

@Component({
  selector: 'mdp-interest-setup-page',
  templateUrl: './interest-setup-page.component.html',
  styleUrl: './interest-setup-page.component.scss'
})
export class InterestSetupPageComponent {
  panelOpenState = true;
  @Input() artifactCategories: Accessory[] = Artifact.testArtifact.categories;
  @Input() artifactMedia: string = Artifact.testArtifact.media;
  @Input() midiaChecked: boolean = false;
  @Input() categoryChecked: boolean = false;
  allComplete: boolean = false;
  setAll(completed: boolean){
    if(completed == false){
      this.allComplete =true;
    }
    this.allComplete = completed;
  }
}