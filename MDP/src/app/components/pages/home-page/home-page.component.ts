import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { HomePageModel } from '../../../models/pages/home-page-model';
import { BasePageComponent } from '../base-page/base-page.component';
import { ArtifactListComponent } from '../../structure/artifact-list/artifact-list.component';
import { Utils } from '../../../classes/utils';

@Component({
  selector: 'mdp-home-page',
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent extends BasePageComponent implements AfterViewInit{
  
  @ViewChild('list') artifactList!: ArtifactListComponent; 
  pageModel:HomePageModel = new HomePageModel();

  override ngOnInit() {
    super.ngOnInit();
    /* this.connection.LoadPage(this.connection.home).subscribe(result => {
      this.pageModel = result as HomePageModel;
    }); */
    this.common.barToggleEvent.subscribe(event => {
      console.log('Toggle bar event received in Home Page');
      let x;
      if (this.mediaQuery.portrait){
        if (event){
          x = Utils.GetContextualMaxWidth("homeArtifactsExpandedPortrait")
        } else {
          x = Utils.GetContextualMaxWidth("homeArtifactsCollapsedPortrait")
        }
      } else {
        if (event){
          x = Utils.GetContextualMaxWidth("homeArtifactsExpanded")
        } else {
          x = Utils.GetContextualMaxWidth("homeArtifactsCollapsed")
        }
      }
      console.log("x: "+x);
      this.artifactList.RecalculateRows(x);
    });
  }

  ngAfterViewInit(){
    if (this.mediaQuery.portrait){
      this.artifactList.RecalculateRows(Utils.GetContextualMaxWidth("homeArtifactsCollapsedPortrait"));
    } else {
      this.artifactList.RecalculateRows(Utils.GetContextualMaxWidth("homeArtifactsExpanded"));
    }
  }
}
