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
      state('true', style({ transform: 'translateX(100%)' })),
      state('false', style({ transform: 'translateX(0%)'})),
      transition("* => true",[animate('100ms')])
    ]),
    trigger('slideRight', [
      state('slided', style({ transform: 'translateX(-100%)' })),
      state('still', style({ transform: 'translateX(0%)','color': '#eb8c34' })),
      transition("* => true",[animate('100ms')]),
      transition("slided => still",[animate('0ms')])
    ]),
  ]
})

export class CarouselComponent extends BaseComponent {
  @Input() aspectRatio: string = "23/10";
  currentLink: number = 0;
  secondsPassed: number = 0;
  buffer: number = 0;
  animationOngoing: boolean = false;
  secondsUntilSwitching: number = 10;
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
    console.log("Seconds passed: " + this.secondsPassed);
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

    this.slideLeft[0] = true;
    this.slideLeft[1] = true;

    this.animationOngoing = true;
    setTimeout(() => {
      this.FinishedSliding();
    }, 200);
  }

  Right(){

    if (this.animationOngoing){
      this.buffer++;
      return;
    }

    console.log("Right");

    this.slideRight[1] = true;
    this.slideRight[2] = true;

    this.animationOngoing = true;
    this.currentLink = 2;
    setTimeout(() => {
      this.FinishedSliding();
    }, 200);
  }

  FinishedSliding(){
    console.log("FinishedSliding");
    console.log(this.slideRight[1]);
    console.log(this.slideRight[2]);
    console.log(this.slideLeft[0]);
    console.log(this.slideLeft[1]);
    this.animationOngoing = false;
    if (this.slideRight[1]){
     /*  this.slideRight[1] = false;
      this.slideRight[2] = false;
      this.ReorderLinksRightwards();
      this.secondsPassed = 0; */
    } else {
      /* this.slideLeft[0] = false;
      this.slideLeft[1] = false;
      this.ReorderLinksLeftwards();
      this.secondsPassed = 0; */
    }
  }

  FinishedSlidingLeft(i:number){
    console.log("FinishedSlidingLeft: " + i);
    if (this.slideLeft[i] == true){
      console.log("FinishedSlidingLeft: " + i);
    }
  }

  FinishedSlidingRight(i:number){
    if (this.slideRight[i] == true){
      console.log("FinishedSlidingRight: " + i);
      this.slideRight[i] = false;
      this.currentLink--;
      if (this.currentLink <= 0){
        this.secondsPassed = 0;
        this.ReorderLinksRightwards();
        this.currentLink = 2;
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
    /* const copy = [...this.links];
    const firstLink = copy[0];
    copy.push(firstLink);
    copy.shift();
    this.links = copy; */
  }
}