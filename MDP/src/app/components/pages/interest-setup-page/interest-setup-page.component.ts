import { Component, Input } from '@angular/core';
import { Category } from '../../../models/accessory/category';

@Component({
  selector: 'mdp-interest-setup-page',
  templateUrl: './interest-setup-page.component.html',
  styleUrl: './interest-setup-page.component.scss'
})
export class InterestSetupPageComponent {
  panelOpenState = true;
  @Input() artifactCategories!: Category[];
  @Input() midiaChecked: boolean = false;
  @Input() categoryChecked: boolean = false;
  allComplete: boolean = false;
  setAll(completed: boolean){
    if(completed == false){
      this.allComplete =true;
    }
    this.allComplete = completed;
  }
}