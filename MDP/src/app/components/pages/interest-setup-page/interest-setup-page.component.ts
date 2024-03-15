import { Component, Input } from '@angular/core';
import { Artifact } from '../../../models/artifacts/artifact';

@Component({
  selector: 'mdp-interest-setup-page',
  templateUrl: './interest-setup-page.component.html',
  styleUrl: './interest-setup-page.component.scss'
})
export class InterestSetupPageComponent {
  panelOpenState = true;
  @Input() artifactCategories: string[] = Artifact.testArtifact.categories;
  @Input() artifactMedia: string = Artifact.testArtifact.media;
  @Input() midiaChecked: boolean = false;
  @Input() categoryChecked: boolean = false;

  // Um for para isso abaixo
  catCheckBox= [
    {value: this.artifactCategories[1], completed: false}
  ]

  changeCheckbox() {
    console.log(this.catCheckBox);
  }
}