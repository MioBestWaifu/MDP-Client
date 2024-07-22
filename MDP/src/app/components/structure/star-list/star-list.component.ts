import { NgFor, NgIf } from '@angular/common';
import { Component, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'mdp-star-list',
  templateUrl: './star-list.component.html',
  styleUrl: './star-list.component.scss'
})
export class StarListComponent implements OnChanges {
  @Input() value: number = 0;
  stars: number[] = [];
  
  ngOnChanges() {
    this.stars = [];
    let rate = this.value / 2;

    for (let i = 0; i < 5; i++) {
      if (rate >= 1) {
        this.stars.push(1);
      } else if (rate >= 0.5) {
        this.stars.push(0.5);
      } else {
        this.stars.push(0);
      }
      rate -= 1;
    }
  }
}
