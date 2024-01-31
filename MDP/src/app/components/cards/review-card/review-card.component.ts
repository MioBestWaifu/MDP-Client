import { Component, Input } from '@angular/core';
import { Interaction } from '../../../models/interaction';

@Component({
  selector: 'mdp-review-card',
  templateUrl: './review-card.component.html',
  styleUrls: ['../card.scss','./review-card.component.scss']
})
export class ReviewCardComponent {
  @Input() review:Interaction = new Interaction();
}
