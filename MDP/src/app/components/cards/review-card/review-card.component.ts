import { Component, Input } from '@angular/core';
import { Interaction } from '../../../models/interaction';

@Component({
  selector: 'mdp-review-card',
  
  
  templateUrl: './review-card.component.html',
  styleUrl: '../card.scss'
})
export class ReviewCardComponent {
  @Input() review:Interaction = new Interaction();
}
