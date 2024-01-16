import { Component, Input} from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { Artifact } from '../../../models/artifacts/artifact';
import { BaseComponent } from '../../base/base.component';

@Component({
  selector: 'mdp-artifact-card',
  templateUrl: './artifact-card.component.html',
  styleUrls: ['../card.scss'],
  animations: [
    trigger('expandCollapse', [
      state('collapsed', style({
        width: '150px'
      })),
      state('expanded', style({
        width: '350px'
      })),
      transition('collapsed <=> expanded', [
        animate('250ms')
      ])
    ])
  ]
})

export class ArtifactCardComponent extends BaseComponent {
  @Input() artifact: Artifact = new Artifact();
  expanded: boolean = false;

  ToggleExpanded() {
    this.expanded = !this.expanded;
  }
}
