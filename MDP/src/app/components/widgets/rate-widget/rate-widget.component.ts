import { Component, Input } from '@angular/core';
import { BaseComponent } from '../../base/base.component';

@Component({
  selector: 'mdp-rate-widget',
  
  
  templateUrl: './rate-widget.component.html',
  styleUrl: './rate-widget.component.scss'
})
export class RateWidgetComponent extends BaseComponent{
  @Input() rate:number = 0;
}
