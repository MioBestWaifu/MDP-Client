import { Component, Input} from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { Artifact } from '../../../models/artifacts/artifact';
import { BaseComponent } from '../../base/base.component';

@Component({
  selector: 'mdp-artifact-card',
  templateUrl: './artifact-card.component.html',
  styleUrls: ['../card.scss', './artifact-card.component.scss'],
  animations: [
    trigger('expandCollapse', [
      state('collapsed', style({
        width: '150px'
      })),
      state('expanded', style({
        width: '380px'
      })),
      transition('collapsed <=> expanded', [
        animate('500ms')
      ])
    ])
  ]
})

export class ArtifactCardComponent extends BaseComponent {
  @Input() artifact: Artifact = new Artifact();
  expanded: boolean = false;
  lastToggle: number = 0;
  minimumDelay: number = 350; 

  Expand() {
    const now = Date.now();
    if (now - this.lastToggle > this.minimumDelay) {
      this.expanded = true;
      this.lastToggle = now;
    }
  }

  Collapse(){
    this.expanded = false;
  }
}
