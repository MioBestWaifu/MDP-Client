import { Component, Input, Output, EventEmitter } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { BaseComponent } from '../../../base/base.component';

@Component({
  selector: 'mdp-horizontal-folder',
  templateUrl: './horizontal-folder.component.html',
  styleUrls: ['../folder.scss'],
  animations: [
    trigger('expandCollapse', [
      state('collapsed', style({
        width: '10px'
      })),
      state('expanded', style({
        width: '100%'
      })),
      transition('collapsed <=> expanded', [
        animate('150ms')
      ])
    ])
  ]
})
export class HorizontalFolderComponent extends BaseComponent {
  @Input() expanded: boolean = false;
  @Output() animationTriggered = new EventEmitter<void>();
  currentIcon: string = "chevron_right";
  lessIcon = "chevron_left"
  moreIcon = "chevron_right"
  Toggle() {
    this.expanded = !this.expanded;
    this.currentIcon = this.expanded ? this.lessIcon : this.moreIcon
    this.animationTriggered.emit();
  }
}