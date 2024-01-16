import { Component, Input } from '@angular/core';
import { BaseComponent } from '../../base/base.component';
import { Interaction } from '../../../models/interaction';

@Component({
  selector: 'mdp-reviews-list',
  templateUrl: './reviews-list.component.html',
  styleUrl: './reviews-list.component.scss'
})
export class ReviewsListComponent extends BaseComponent{
  @Input() vertical:boolean = false
  @Input() reviews!:Interaction[]
}
