import { Component, ElementRef, Input, Renderer2 } from '@angular/core';
import { BaseComponent } from '../../base/base.component';
import { MatDialogRef } from '@angular/material/dialog';
import { MediaQueryService } from '../../../services/media-query.service';
import { CommonContainerService } from '../../../services/common-container.service';
import { InteractionService } from '../../../services/interaction.service';
import { Artifact } from '../../../models/artifacts/artifact';

@Component({
  selector: 'mdp-rate-dialog',
  templateUrl: './rate-dialog.component.html',
  styleUrl: './rate-dialog.component.scss'
})
export class RateDialogComponent extends BaseComponent {
  @Input() work: Artifact = new Artifact();
  connection: any;

  constructor(mediaQuery: MediaQueryService, common: CommonContainerService,
    public dialogRef: MatDialogRef<RateDialogComponent>, connection: InteractionService, elementRef: ElementRef, renderer: Renderer2
  ) {
    super(mediaQuery, common, elementRef, renderer);
  }
  RateChanged(newRate: number) {
    this.connection.Rate(this.connection.rateUser, newRate, this.work.id);
  }

  onNoClick(): void {
    this.dialogRef.close();   
  }
}
