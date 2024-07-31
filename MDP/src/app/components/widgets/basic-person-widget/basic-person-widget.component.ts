import { Component, ElementRef, Input, Renderer2 } from "@angular/core";
import { Person } from "../../../models/persons/person";
import { CommonContainerService } from "../../../services/common-container.service";
import { InteractionService } from "../../../services/interaction.service";
import { MediaQueryService } from "../../../services/media-query.service";
import { BaseComponent } from "../../base/base.component";

@Component({
  selector: 'mdp-basic-person-widget',
  templateUrl: './basic-person-widget.component.html',
  styleUrls: ['../widget.scss','./basic-person-widget.component.scss']
})
export class BasicPersonWidgetComponent extends BaseComponent {
  @Input() person: Person = new Person();

  constructor(mediaQuery: MediaQueryService, common: CommonContainerService, 
    public connection: InteractionService, elementRef: ElementRef, renderer: Renderer2
  ) {
    super(mediaQuery, common,elementRef, renderer);
  }

  RateChanged(newRate: number) {
    this.connection.Rate(this.connection.rateUser, newRate, this.person.id);
  }
}
