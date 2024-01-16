import { Component, Input } from "@angular/core";
import { Person } from "../../../models/person";
import { CommonContainerService } from "../../../services/common-container.service";
import { InteractionService } from "../../../services/interaction.service";
import { MediaQueryService } from "../../../services/media-query.service";
import { BaseComponent } from "../../base/base.component";

@Component({
  selector: 'mdp-basic-person-widget',
  templateUrl: './basic-person-widget.component.html',
  styleUrls: ['./basic-person-widget.component.scss']
})
export class BasicPersonWidgetComponent extends BaseComponent {
  @Input() person: Person = new Person();

  constructor(mediaQuery: MediaQueryService, common: CommonContainerService, 
    public connection: InteractionService
  ) {
    super(mediaQuery, common);
  }

  RateChanged(newRate: number) {
    this.connection.Rate(this.connection.rateUser, newRate, this.person.id);
  }
}
