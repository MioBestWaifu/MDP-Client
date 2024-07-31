import { Component, Input, OnInit} from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { Artifact } from '../../../models/artifacts/artifact';
import { BaseComponent } from '../../base/base.component';

@Component({
  selector: 'mdp-artifact-card',
  templateUrl: './artifact-card.component.html',
  styleUrls: ['../card.scss', './artifact-card.component.scss']
})

export class ArtifactCardComponent extends BaseComponent{
  @Input() artifact: Artifact = new Artifact();
}
