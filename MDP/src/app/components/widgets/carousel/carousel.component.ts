import { Component, ElementRef, Input, Renderer2 } from "@angular/core";
import { Link } from "../../../models/link";
import { CommonContainerService } from "../../../services/common-container.service";
import { MediaQueryService } from "../../../services/media-query.service";
import { BaseComponent } from "../../base/base.component";
import { Router } from "@angular/router";
import { News } from "../../../models/information/news";

@Component({
  selector: 'mdp-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})

export class CarouselComponent extends BaseComponent {
  //Carrosel um dia pode passar a ser um tipo próprio, até lá é News
  @Input() news!: News[];

  constructor( mediaQuery: MediaQueryService,common: CommonContainerService, public router:Router, elementRef: ElementRef, renderer: Renderer2
  ) {
    super(mediaQuery, common, elementRef, renderer);
  }
}