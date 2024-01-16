import { Component, Output, EventEmitter } from '@angular/core';
import { BaseComponent } from '../../base/base.component';

@Component({
  selector: 'mdp-rate-control',
  templateUrl: './rate-control.component.html',
  styleUrls: ['./rate-control.component.scss']
})
export class RateControlComponent extends BaseComponent {
  @Output() rated = new EventEmitter<number>();

  SelectionChanged(event: Event) {
    let newRate: number;
    if (typeof (event.target as HTMLInputElement).value === 'string') {
      newRate = -1;
    } else {
      newRate = (event.target as HTMLInputElement).valueAsNumber;
    }
    this.rated.emit(newRate);
  }
}
