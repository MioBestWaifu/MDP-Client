import { Component, ElementRef, Input, Renderer2 } from "@angular/core";
import { Link } from "../../../models/link";
import { CommonContainerService } from "../../../services/common-container.service";
import { InteractionService } from "../../../services/interaction.service";
import { MediaQueryService } from "../../../services/media-query.service";
import { BaseComponent } from "../../base/base.component";
import { Router } from "@angular/router";
import { animate, state, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'mdp-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
  animations: [
    trigger('slideLeft', [
      state('void', style({ transform: 'translateX(100%)' })),
      state('*', style({ transform: 'translateX(0)' })),
      transition(':enter', animate('300ms ease-in')),
      transition(':leave', animate('300ms ease-out'))
    ]),
    trigger('slideRight', [
      state('void', style({ transform: 'translateX(-100%)' })),
      state('*', style({ transform: 'translateX(0)' })),
      transition(':enter', animate('300ms ease-in')),
      transition(':leave', animate('300ms ease-out'))
    ])
  ]
})

export class CarouselComponent extends BaseComponent {
  @Input() aspectRatio: string = "23/10";
  currentLink: number = 0;
  secondsPassed: number = 0;
  buffer: number = 0;
  animationOngoing: boolean = false;
  secondsUntilSwitching: number = 5;
  @Input() links!: Link[];
  intervalId: number | undefined;

  constructor( mediaQuery: MediaQueryService,common: CommonContainerService, public router:Router, elementRef: ElementRef, renderer: Renderer2
  ) {
    super(mediaQuery, common, elementRef, renderer);
  }

  override ngOnInit() {
    super.ngOnInit();
    this.intervalId = window.setInterval(() => this.SecondPassed(), 1000);
    const elementWidth = this.elementRef.nativeElement.offsetWidth;
    const aspectRatioArray = this.aspectRatio.split('/');
    const aspectRatioWidth = parseInt(aspectRatioArray[0]);
    const aspectRatioHeight = parseInt(aspectRatioArray[1]);
    const idealHeight = (elementWidth * aspectRatioHeight) / aspectRatioWidth;
    this.renderer.setStyle(this.elementRef.nativeElement, 'height', `${idealHeight}px`);
  }

  ngOnDestroy() {
    if (this.intervalId) {
      window.clearInterval(this.intervalId);
    }
  }

  SecondPassed() {
    this.secondsPassed++;
    if (this.secondsPassed >= this.secondsUntilSwitching) {
      this.Forward();
    }
  }

  Back(){
    if (this.animationOngoing){
      this.buffer--;
      return;
    }
    this.secondsPassed = 0;
    this.currentLink = this.currentLink > 0 ? this.currentLink - 1 : this.links.length - 1;
  }

  Forward(){
    if (this.animationOngoing){
      this.buffer++;
      return;
    }
    this.secondsPassed = 0;
    this.currentLink = this.currentLink < this.links.length - 1 ? this.currentLink + 1 : 0;
  }
}