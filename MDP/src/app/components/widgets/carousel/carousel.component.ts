import { Component, ElementRef, Input, Renderer2 } from "@angular/core";
import { Link } from "../../../models/link";
import { CommonContainerService } from "../../../services/common-container.service";
import { InteractionService } from "../../../services/interaction.service";
import { MediaQueryService } from "../../../services/media-query.service";
import { BaseComponent } from "../../base/base.component";
import { Router } from "@angular/router";

@Component({
  selector: 'mdp-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent extends BaseComponent {
  currentLink: number = 0;
  secondsPassed: number = 0;
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
  }

  ngOnDestroy() {
    if (this.intervalId) {
      window.clearInterval(this.intervalId);
    }
  }

  SecondPassed() {
    this.secondsPassed++;
    if (this.secondsPassed >= this.secondsUntilSwitching) {
      this.secondsPassed = 0;
      this.currentLink = this.currentLink < this.links.length - 1 ? this.currentLink + 1 : 0;
    }
  }

  Back(){
    this.secondsPassed = 0;
    this.currentLink = this.currentLink > 0 ? this.currentLink - 1 : this.links.length - 1;
  }

  Forward(){
    this.secondsPassed = 0;
    this.currentLink = this.currentLink < this.links.length - 1 ? this.currentLink + 1 : 0;
  }
}