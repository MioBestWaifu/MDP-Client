import { Component, ViewChild } from '@angular/core';
import { HomePageModel } from '../../../models/pages/home-page-model';
import { BasePageComponent } from '../base-page/base-page.component';
import { ArtifactListComponent } from '../../structure/artifact-list/artifact-list.component';
import { BasePageModel } from '../../../models/pages/base-page-model';

@Component({
  selector: 'mdp-home-page',
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent extends BasePageComponent{
  
  @ViewChild('list') artifactList!: ArtifactListComponent; 
  pageModel:HomePageModel = new HomePageModel();

  override ngOnInit() {
    super.ngOnInit();
    this.connection.LoadPage(this.connection.home).subscribe((result: BasePageModel) => {
      this.pageModel = result as HomePageModel;
    });
  }
}
