import { NgFor, NgIf } from '@angular/common';
import { Component, Input, OnChanges } from '@angular/core';
import { StarComponent } from '../../shared/icons/stars/star/star.component';
import { FillStarComponent } from '../../shared/icons/stars/fill-star/fill-star.component';
import { HalfFillStarComponent } from '../../shared/icons/stars/half-fill-star/half-fill-star.component';

@Component({
  selector: 'app-star-list',
  standalone: true,
  imports: [NgFor, NgIf, StarComponent, FillStarComponent, HalfFillStarComponent],
  templateUrl: './star-list.component.html',
  styleUrl: './star-list.component.scss'
})
export class StarListComponent implements OnChanges {
  @Input() value: number = 0;
  stars: number[] = [];
  
  ngOnChanges() {
    this.stars = [];
    let rate = this.value;

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
