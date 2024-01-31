import { AfterContentInit, AfterViewInit, Component, ContentChild, Input } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { BaseComponent } from '../../../base/base.component';

@Component({
  selector: 'mdp-vertical-folder',
  templateUrl: './vertical-folder.component.html',
  styleUrls: ['../folder.scss'],
  animations: [
    trigger('expandCollapse', [
      state('collapsed', style({
        height: '0px'
      })),
      state('expanded', style({
        height: '{{maxHeight}}'
      }), {params: {maxHeight: '14px'}}),
      transition('collapsed <=> expanded', [
        animate('400ms')
      ])
    ])
  ]
})
export class VerticalFolderComponent extends BaseComponent  implements AfterViewInit{
  @Input() maxHeight: string = '10px';
  @Input() label: string = '';
  expanded: boolean = true;
  moreIcon = "expand_more"
  lessIcon = "expand_less"
  currentIcon: string = this.expanded ? this.lessIcon : this.moreIcon;

  Toggle() {
    this.expanded = !this.expanded;
    this.currentIcon = this.expanded ? this.lessIcon : this.moreIcon;
    const contentElement = document.getElementById('content');
      if (contentElement && this.maxHeight == 'auto') {
        console.log(contentElement.offsetHeight);
        this.maxHeight = contentElement.offsetHeight + 'px';
      }
  }

  ngAfterViewInit() {
  }

}
