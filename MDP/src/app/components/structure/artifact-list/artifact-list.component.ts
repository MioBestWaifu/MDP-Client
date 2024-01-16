import { Component, Input } from '@angular/core';
import { Artifact } from '../../../models/artifacts/artifact';
import { BaseComponent } from '../../base/base.component';

@Component({
  selector: 'mdp-artifact-list',
  templateUrl: './artifact-list.component.html',
  styleUrl: './artifact-list.component.scss'
})
export class ArtifactListComponent extends BaseComponent{
  @Input() vertical:boolean = false;
  @Input() artifacts!:Artifact[];
}
