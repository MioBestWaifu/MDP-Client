import { Component } from '@angular/core';
import { BasePageComponent } from '../base-page/base-page.component';
import { UserPageModel } from '../../../models/pages/user-page-model';
import { BasePageModel } from '../../../models/pages/base-page-model';

@Component({
  selector: 'mdp-user-page',
  
  
  templateUrl: './user-page.component.html',
  styleUrl: './user-page.component.scss'
})
export class UserPageComponent extends BasePageComponent{
  pageModel:UserPageModel = new UserPageModel();
  override ngOnInit(){
    super.ngOnInit();
    
    /* let requestUrl = this.connection.user;
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      requestUrl += `?id=${id}`;
    }
    this.connection.LoadPage(requestUrl).subscribe((result: BasePageModel) => {
      this.pageModel = result as UserPageModel;
    }); */
  }
}
