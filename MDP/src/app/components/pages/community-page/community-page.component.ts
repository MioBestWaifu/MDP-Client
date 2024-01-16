import { Component } from '@angular/core';
import { BasePageComponent } from '../base-page/base-page.component';
import { CommunityPageModel } from '../../../models/pages/community-page-model';
import { BasePageModel } from '../../../models/pages/base-page-model';

@Component({
  selector: 'mdp-community-page',
  templateUrl: './community-page.component.html',
  styleUrl: './community-page.component.scss'
})
export class CommunityPageComponent extends BasePageComponent{
  public pageModel:CommunityPageModel = new CommunityPageModel();

  override ngOnInit(){
    super.ngOnInit();
    
    let requestUrl = this.connection.community;
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      requestUrl += `?id=${id}`;
    }
    
    this.connection.LoadPage(requestUrl).subscribe((result: BasePageModel) => {
      this.pageModel = result as CommunityPageModel;
    });
  }
}
