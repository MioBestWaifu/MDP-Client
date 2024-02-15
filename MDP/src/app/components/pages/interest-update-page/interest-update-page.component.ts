import { Component } from '@angular/core';
import { InterestUpdatePageModel } from '../../../models/pages/interest-update-page-model';
import { BasePageComponent } from '../base-page/base-page.component';

@Component({
  selector: 'mdp-interest-update-page',
  
  
  templateUrl: './interest-update-page.component.html',
  styleUrl: './interest-update-page.component.scss'
})
export class InterestUpdatePageComponent extends BasePageComponent{
  pageModel:InterestUpdatePageModel = new InterestUpdatePageModel();

  override ngOnInit() {
    super.ngOnInit();
    this.connection.LoadPage(this.connection.interestUpdate).subscribe(result => {
      this.pageModel = result as InterestUpdatePageModel;
    });
  }
}
