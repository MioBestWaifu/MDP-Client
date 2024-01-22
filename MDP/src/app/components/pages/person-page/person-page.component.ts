import { Component } from '@angular/core';
import { BasePageModel } from '../../../models/pages/base-page-model';
import { PersonPageModel } from '../../../models/pages/person-page-model';
import { UserPageModel } from '../../../models/pages/user-page-model';
import { BasePageComponent } from '../base-page/base-page.component';

@Component({
  selector: 'mdp-person-page',
  
  
  templateUrl: './person-page.component.html',
  styleUrl: './person-page.component.scss'
})
export class PersonPageComponent extends BasePageComponent{
  pageModel: PersonPageModel = new PersonPageModel();
  override ngOnInit(){
    super.ngOnInit();
    
    /* let requestUrl = this.connection.person;
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      requestUrl += `?id=${id}`;
    }
    this.connection.LoadPage(requestUrl).subscribe((result: BasePageModel) => {
      this.pageModel = result as PersonPageModel;
    }); */
  }
}
