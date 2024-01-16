import { Component, Input } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { BaseComponent } from '../../../base/base.component';

@Component({
  selector: 'mdp-vertical-folder',
  templateUrl: './vertical-folder.component.html',
  styleUrls: ['../folder.scss'],
  animations: [
    trigger('expandCollapse', [
      state('collapsed', style({
        height: '14px'
      })),
      state('expanded', style({
        height: '{{maxHeight}}'
      }), {params: {maxHeight: '14px'}}),
      transition('collapsed <=> expanded', [
        animate('150ms')
      ])
    ])
  ]
})
export class VerticalFolderComponent extends BaseComponent {
  @Input() maxHeight: string = '10px';
  expanded: boolean = false;
  currentIcon: string = "expand_more";
  moreIcon = "expand_more"
  lessIcon = "expand_less"
  Toggle() {
    this.expanded = !this.expanded;
    this.currentIcon = this.expanded ? this.lessIcon : this.moreIcon;
  }
}
