import { Component } from '@angular/core';
import { BasePageModel } from '../../../models/pages/base-page-model';
import { CompanyPageModel } from '../../../models/pages/company-page-model';
import { BasePageComponent } from '../base-page/base-page.component';

@Component({
  selector: 'mdp-company-page',
  
  
  templateUrl: './company-page.component.html',
  styleUrl: './company-page.component.scss'
})
export class CompanyPageComponent extends BasePageComponent{
  pageModel: CompanyPageModel = new CompanyPageModel();
  override ngOnInit(){
    super.ngOnInit();
    
    let requestUrl = this.connection.company;
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      requestUrl += `?id=${id}`;
    }
    this.connection.LoadPage(requestUrl).subscribe((result: BasePageModel) => {
      this.pageModel = result as CompanyPageModel;
    });
  }
}
