import { Component, ElementRef, Input, Renderer2 } from "@angular/core";
import { Artifact } from "../../../models/artifacts/artifact";
import { CommonContainerService } from "../../../services/common-container.service";
import { InteractionService } from "../../../services/interaction.service";
import { MediaQueryService } from "../../../services/media-query.service";
import { BaseComponent } from "../../base/base.component";
import { MatDialog } from "@angular/material/dialog";
import { RateDialogComponent } from "../../dialogs/rate-dialog/rate-dialog.component";
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';

@Component({
  selector: 'mdp-basic-work-widget',
  templateUrl: './basic-work-widget.component.html',
  styleUrls: ['../widget.scss','./basic-work-widget.component.scss']
})
export class BasicWorkWidgetComponent extends BaseComponent {
  @Input() work: Artifact = new Artifact();
  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'top';
  
  constructor(mediaQuery: MediaQueryService,common: CommonContainerService, 
    public connection: InteractionService, elementRef: ElementRef, renderer: Renderer2, private dialog: MatDialog, private _snackBar: MatSnackBar
  ) {
    super(mediaQuery, common, elementRef, renderer);
  }

  RateChanged(newRate: number) {
    this.connection.Rate(this.connection.rateUser, newRate, this.work.id);
  }

  openRateDialog() {
    const dialogRef = this.dialog.open(RateDialogComponent, {
      width: '450px',
      height: '300px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');

    });
  }

  openSnackBar() {
    this._snackBar.open('Added to favorites', 'Close', {
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
    });
  }
}