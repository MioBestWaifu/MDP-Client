import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { BaseComponent } from './../../base/base.component';

@Component({
  selector: 'mdp-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrl: './navigation-bar.component.scss',
  animations: [
    trigger('expandCollapse', [
      state('collapsed', style({
        height: '0px',
        visibility: 'hidden'
      })),
      state('expanded', style({
      }), { params: { maxHeight: 'auto' } }),
      transition('collapsed => expanded', [
        animate('{{animationDuration}}')
      ], { params: { animationDuration: '200ms' } }),
      transition('expanded => collapsed', [
        animate('200ms')
      ])
    ])
  ]
})
export class NavigationBarComponent extends BaseComponent {
  public hoverFolder: boolean = true;
  @ViewChild('content') content!: ElementRef;
  @Input() maxHeight: string = '';
  pixelsPerMs: number = 1.2;
  animationDuration: string = '400ms';
  expanded: boolean = true;
  moreIcon = "expand_more"
  lessIcon = "expand_less"
  currentIcon: string = this.expanded ? this.lessIcon : this.moreIcon;

  Toggle() {
    this.expanded = !this.expanded;
    this.currentIcon = this.expanded ? this.lessIcon : this.moreIcon;
    if (this.content && this.maxHeight == 'auto') {
      console.log(this.content.nativeElement.offsetHeight);
      this.maxHeight = this.content.nativeElement.offsetHeight + 'px';
      this.animationDuration = Math.floor(this.content.nativeElement.offsetHeight / this.pixelsPerMs) + 'ms'
    }
  }

  expaned() {
    this.hoverFolder = !this.hoverFolder;
  }
}
