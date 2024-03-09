import { Component } from '@angular/core';
import { BaseComponent } from '../../base/base.component';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'mdp-rate-dialog',
  templateUrl: './rate-dialog.component.html',
  styleUrl: './rate-dialog.component.scss'
})
export class RateDialogComponent{
  constructor(
    public dialogRef: MatDialogRef<RateDialogComponent>
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}
