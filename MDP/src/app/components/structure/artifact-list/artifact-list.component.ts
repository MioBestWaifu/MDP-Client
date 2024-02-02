import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Artifact } from '../../../models/artifacts/artifact';
import { BaseComponent } from '../../base/base.component';
import { Dictionary } from '../../../classes/dictionary';

@Component({
  selector: 'mdp-artifact-list',
  templateUrl: './artifact-list.component.html',
  styleUrl: './artifact-list.component.scss'
})
export class ArtifactListComponent extends BaseComponent implements OnChanges{
  @Input() vertical:boolean = false;
  @Input() artifacts!:Artifact[];
  artifactRows!:Dictionary<number,Artifact[]>;
  effectiveMargin!:number;

  override ngOnInit(): void {
      super.ngOnInit();
      this.common.barToggleEvent.subscribe(event => {
        this.RecalculateRows();
      });
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.RecalculateRows();
  }

  RecalculateRows() {
    let availaibleWidth:number = this.elementRef.nativeElement.clientWidth;
    /* console.log("Recalculating rows " + availaibleWidth); */

    let rowItems = 1;
    while (rowItems * 150 <= availaibleWidth - 380) {
      rowItems++;
    }

    this.artifactRows = new Dictionary<number, Artifact[]>();
    let index = 0;
    while (index < this.artifacts.length) {
      const row = this.artifacts.slice(index, index + rowItems);
      this.artifactRows.Add(index, row);
      index += rowItems;
    }

  }
  
}
