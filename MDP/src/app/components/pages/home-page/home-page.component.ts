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

  ngAfterViewInit(){
  }
}
