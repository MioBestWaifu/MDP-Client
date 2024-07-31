import { Component, Input } from '@angular/core';
import { Artifact } from '../../../models/artifacts/artifact';
import { BaseComponent } from '../../base/base.component';

@Component({
  selector: 'mdp-ad-list',
  templateUrl: './ad-list.component.html',
  styleUrl: './ad-list.component.scss'
})

export class AdListComponent extends BaseComponent {
  @Input() artifact!: Artifact;
}
