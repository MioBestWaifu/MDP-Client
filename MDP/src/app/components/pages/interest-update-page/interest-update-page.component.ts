import { Component } from '@angular/core';
import { InterestUpdatePageModel } from '../../../models/pages/interest-update-page-model';
import { BasePageComponent } from '../base-page/base-page.component';

@Component({
  selector: 'mdp-interest-update-page',
  
  
  templateUrl: './interest-update-page.component.html',
  styleUrl: './interest-update-page.component.scss'
})
export class InterestUpdatePageComponent extends BasePageComponent{
  private _pageModel: InterestUpdatePageModel = new InterestUpdatePageModel();

  get pageModel(): InterestUpdatePageModel {
    return this._pageModel;
  }

  set pageModel(value: InterestUpdatePageModel) {
    console.log('pageModel is being set:', value);
    console.trace(); // This will log a stack trace, showing where the setter was called from
    this._pageModel = value;
  }

  override ngOnInit() {
    super.ngOnInit();
    /* this.connection.LoadPage(this.connection.interestUpdate).subscribe(result => {
      this.pageModel = result as InterestUpdatePageModel;
    }); */
  }
}
