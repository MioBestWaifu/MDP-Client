import { Component, ElementRef, Input, ViewChild } from '@angular/core';
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
      }), {params: {maxHeight: 'auto'}}),
      transition('collapsed => expanded', [
        animate('{{animationDuration}}')
      ], {params: {animationDuration: '200ms'}}),
      transition('expanded => collapsed', [
        animate('0ms')
      ])
    ])
  ]
})
export class VerticalFolderComponent extends BaseComponent{
  @ViewChild('content') content!: ElementRef;
  @Input() maxHeight: string = '10px';
  @Input() label: string = '';
  pixelsPerMs: number = 1.2;
  animationDuration: string = '400ms';
  expanded: boolean = true;
  moreIcon = "expand_more"
  lessIcon = "expand_less"
  currentIcon: string = this.expanded ? this.lessIcon : this.moreIcon;

  override ngOnInit() {
    super.ngOnInit();
    console.log('VerticalFolderComponent.ngOnInit()');
  }

  Toggle() {
    this.expanded = !this.expanded;
    this.currentIcon = this.expanded ? this.lessIcon : this.moreIcon;
    if (this.content && this.maxHeight == 'auto') {
      console.log(this.content.nativeElement.offsetHeight);
      this.maxHeight = this.content.nativeElement.offsetHeight + 'px';
      this.animationDuration = Math.floor(this.content.nativeElement.offsetHeight/this.pixelsPerMs) + 'ms'
    }
  }

}
