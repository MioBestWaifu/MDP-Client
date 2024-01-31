import { Component, Input } from "@angular/core";
import { Artifact } from "../../../models/artifacts/artifact";
import { CommonContainerService } from "../../../services/common-container.service";
import { InteractionService } from "../../../services/interaction.service";
import { MediaQueryService } from "../../../services/media-query.service";
import { BaseComponent } from "../../base/base.component";

@Component({
  selector: 'mdp-basic-work-widget',
  templateUrl: './basic-work-widget.component.html',
  styleUrls: ['../widget.scss','./basic-work-widget.component.scss']
})
export class BasicWorkWidgetComponent extends BaseComponent {
  @Input() work: Artifact = new Artifact();

  constructor(mediaQuery: MediaQueryService,common: CommonContainerService, 
    public connection: InteractionService
  ) {
    super(mediaQuery, common);
  }

  RateChanged(newRate: number) {
    this.connection.Rate(this.connection.rateUser, newRate, this.work.id);
  }
}