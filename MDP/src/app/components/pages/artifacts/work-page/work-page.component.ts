import { Component } from '@angular/core';
import { BasePageComponent } from '../../base-page/base-page.component';
import { WorkPageModel } from '../../../../models/pages/work-page-model';
import { BasePageModel } from '../../../../models/pages/base-page-model';

@Component({
  selector: 'mdp-work-page',
  
  templateUrl: './work-page.component.html',
  styleUrl: './work-page.component.scss'
})
export class WorkPageComponent extends BasePageComponent{
  pageModel:WorkPageModel = new WorkPageModel();
  showFractions:boolean = false;
  count:number = 0;
  
  override ngOnInit(): void {
      super.ngOnInit();
      let requestUrl = this.connection.work;
      const id = this.route.snapshot.paramMap.get('id');
      if (id) {
        requestUrl += `?id=${id}`;   
      }
      this.connection.LoadPage(requestUrl).subscribe((result: BasePageModel) => {
          this.pageModel = result as WorkPageModel;
          this.count += 1;
          console.log(this.count);
          console.log(this.pageModel.work.fullName.literal);       
      });
  }
}
