import { Component } from '@angular/core';
import { BasePageComponent } from '../../base-page/base-page.component';
import { WorkPageModel } from '../../../../models/pages/work-page-model';

@Component({
  selector: 'mdp-work-page',
  
  
  templateUrl: './work-page.component.html',
  styleUrl: './work-page.component.scss'
})
export class WorkPageComponent extends BasePageComponent{
  pageModel:WorkPageModel = new WorkPageModel();
  fractionsLabel:string = "Fractions";
  showFractions:boolean = false;
}
