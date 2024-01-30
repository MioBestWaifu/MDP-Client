import { Component, Input } from '@angular/core';
import { Artifact } from '../../../models/artifacts/artifact';
import { BaseComponent } from '../../base/base.component';
import { Dictionary } from '../../../classes/dictionary';

@Component({
  selector: 'mdp-artifact-list',
  templateUrl: './artifact-list.component.html',
  styleUrl: './artifact-list.component.scss'
})
export class ArtifactListComponent extends BaseComponent{
  @Input() vertical:boolean = false;
  @Input() artifacts!:Artifact[];
  artifactRows!:Dictionary<number,Artifact[]>;
  effectiveMargin!:number;

  RecalculateRows(availaibleWidth: number) {
    console.log("Recalculating rows");
    let rowItems = 1;
    while (rowItems * 150 <= availaibleWidth - 380) {
      rowItems++;
    }
    /* console.log("Row items: " + rowItems);

    console.log("Availaible width: " + availaibleWidth);
    console.log("Row items: " + rowItems);
    this.effectiveMargin = (Math.floor(availaibleWidth) - rowItems * 150)/(rowItems+1);
    console.log("Effective margin: " + this.effectiveMargin);
    this.effectiveMargin = Math.floor(this.effectiveMargin); */

    this.artifactRows = new Dictionary<number, Artifact[]>();
    let index = 0;
    while (index < this.artifacts.length) {
      const row = this.artifacts.slice(index, index + rowItems);
      this.artifactRows.Add(index, row);
      index += rowItems;
    }

  }
  
}
