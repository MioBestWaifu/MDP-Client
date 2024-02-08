import { Component, Input } from '@angular/core';
import { Review } from '../../../models/review';

@Component({
  selector: 'mdp-review-card',
  templateUrl: './review-card.component.html',
  styleUrls: ['../card.scss','./review-card.component.scss']
})
export class ReviewCardComponent {
  @Input() review:Review = new Review();
}
