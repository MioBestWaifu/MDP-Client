import { Component, Output, EventEmitter, Input } from '@angular/core';
import { BaseComponent } from '../../base/base.component';
import { Artifact } from '../../../models/artifacts/artifact';
import { InteractionService } from '../../../services/interaction.service';
import { Review } from '../../../models/review';
import { CommonContainerService } from '../../../services/common-container.service';

@Component({
  selector: 'mdp-rate-control',
  templateUrl: './rate-control.component.html',
  styleUrls: ['./rate-control.component.scss']
})
export class RateControlComponent{
  @Input() rate?: number;
  @Input() artifact!: Artifact;
  @Output() rated = new EventEmitter<number>();

  constructor(private conn:InteractionService, private common:CommonContainerService){}

  SetRate(newRate:number) {
    this.rated.emit(newRate);
    const review:Review = {
      artifactId: this.artifact.id,
      rating: newRate,
      comment: '',
      date: new Date(),
      user: this.common.user 
    };

    this.conn.RateWork(review).subscribe();
  }
}
