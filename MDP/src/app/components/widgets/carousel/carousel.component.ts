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
      state('slided', style({ transform: 'translateX(100%)' })),
      state('still', style({ transform: 'translateX(0%)'})),
      transition("* => slided",[animate('300ms')]),
      transition("slided => still",[animate('0ms')])
    ]),
    trigger('slideRight', [
      state('slided', style({ transform: 'translateX(-100%)' })),
      state('still', style({ transform: 'translateX(0%)','color': '#eb8c34' })),
      transition("* => slided",[animate('300ms')]),
      transition("slided => still",[animate('0ms')])
    ]),
  ]
})

export class CarouselComponent extends BaseComponent {
  @Input() aspectRatio: string = "23/10";
  ongoingAnimationsNumber: number = 0;
  secondsPassed: number = 0;
  buffer: number = 0;
  animationOngoing: boolean = false;
  secondsUntilSwitching: number = 5;
  slideRight!:boolean[];
  slideLeft!:boolean[];
  @Input() links!: Link[];
  intervalId: number | undefined;

  constructor( mediaQuery: MediaQueryService,common: CommonContainerService, public router:Router, elementRef: ElementRef, renderer: Renderer2
  ) {
    super(mediaQuery, common, elementRef, renderer);
    this.slideLeft = [false,false,false];
    this.slideRight = [false,false,false];
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
    /* console.log("Seconds passed: " + this.secondsPassed); */
    if (this.secondsPassed >= this.secondsUntilSwitching) {
      //this.secondsUntilSwitching = this.secondsUntilSwitching + 10;
      this.Right();
    }
  }

  Left(){
    if (this.animationOngoing){
      this.buffer--;
      return;
    }

    this.secondsPassed = 0;
    this.slideLeft[0] = true;
    this.slideLeft[1] = true;

    this.animationOngoing = true;

    /* if(this.buffer < 0){
      this.buffer++;
    } */
  }

  Right(){
    if (this.animationOngoing){
      this.buffer++;
      return;
    }

    this.secondsPassed = 0;
    /* console.log("Right"); */

    this.slideRight[1] = true;
    this.slideRight[2] = true;

    this.animationOngoing = true;
    this.ongoingAnimationsNumber = 2;
    /* if(this.buffer > 0){
      this.buffer--;
    } */
  }

  FinishedSlidingLeft(i:number){
    if (this.slideLeft[i] == true){
      console.log("FinishedSlidingLeft: " + i);
      this.ongoingAnimationsNumber--;
      if (this.ongoingAnimationsNumber <= 0){
        this.ReorderLinksLeftwards();
        this.slideLeft[0] = false;
        this.slideLeft[1] = false;
        this.animationOngoing = false;
        /* if(this.buffer < 0){
          this.Left();
        } */
      }
    }
  }

  FinishedSlidingRight(i:number){
    if (this.slideRight[i] == true){
      console.log("FinishedSlidingRight: " + i);
      this.ongoingAnimationsNumber--;
      if (this.ongoingAnimationsNumber <= 0){
        this.ReorderLinksRightwards();
        this.slideRight[1] = false;
        this.slideRight[2] = false;
        this.animationOngoing = false;
        /* if(this.buffer > 0){
          this.Right();
        } */
      }
    }
  }

  ReorderLinksLeftwards(){
    const copy = [...this.links];
    const lastIndex = copy.length - 1;
    const lastLink = copy[lastIndex];
    copy.unshift(lastLink);
    copy.pop();
    this.links = copy;
  }

  ReorderLinksRightwards(){
    const copy = [...this.links];
    const firstLink = copy[0];
    copy.push(firstLink);
    copy.shift();
    this.links = copy;
  }
}