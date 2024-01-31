import { Component, ElementRef, Input, Renderer2 } from '@angular/core';
import { Company } from '../../../models/company';
import { CommonContainerService } from '../../../services/common-container.service';
import { InteractionService } from '../../../services/interaction.service';
import { MediaQueryService } from '../../../services/media-query.service';
import { BaseComponent } from '../../base/base.component';

@Component({
  selector: 'mdp-basic-company-widget',
  templateUrl: './basic-company-widget.component.html',
  styleUrls: ['./basic-company-widget.component.scss']
})
export class BasicCompanyWidgetComponent extends BaseComponent {
  @Input() company: Company = new Company();

  constructor(
    mediaQuery: MediaQueryService, 
    common: CommonContainerService, 
    public connection: InteractionService, elementRef: ElementRef, renderer: Renderer2
  ) {
    super(mediaQuery, common,elementRef, renderer);
  }

  RateChanged(newRate: number) {
    this.connection.Rate(this.connection.rateUser, newRate, this.company.id);
  }
}