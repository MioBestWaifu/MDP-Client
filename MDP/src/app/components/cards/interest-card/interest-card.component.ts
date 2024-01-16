import { Component, Input } from '@angular/core';
import { BaseComponent } from '../../base/base.component';
import { Interest } from '../../../models/interest';

@Component({
  selector: 'mdp-interest-card',
  templateUrl: './interest-card.component.html',
  styleUrl: '../card.scss'
})
export class InterestCardComponent extends BaseComponent{
  @Input() interest:Interest = new Interest();
}
