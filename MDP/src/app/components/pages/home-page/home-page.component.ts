import { Component } from '@angular/core';
import { HomePageModel } from '../../../models/pages/home-page-model';
import { BasePageComponent } from '../base-page/base-page.component';

@Component({
  selector: 'mdp-home-page',
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent extends BasePageComponent{
  pageModel:HomePageModel = new HomePageModel();

  override ngOnInit() {
    super.ngOnInit();
    /* this.connection.LoadPage(this.connection.home).subscribe(result => {
      this.pageModel = result as HomePageModel;
    }); */
  }
}
