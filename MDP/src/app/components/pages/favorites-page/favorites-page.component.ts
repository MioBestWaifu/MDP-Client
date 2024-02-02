import { AfterViewChecked, AfterViewInit, Component, QueryList, ViewChildren } from '@angular/core';
import { Utils } from '../../../classes/utils';
import { FavoritesPageModel } from '../../../models/pages/favorites-page-model';
import { BasePageComponent } from '../base-page/base-page.component';
import { ArtifactListComponent } from '../../structure/artifact-list/artifact-list.component';

@Component({
  selector: 'mdp-favorites-page',
  templateUrl: './favorites-page.component.html',
  styleUrl: './favorites-page.component.scss'
})
export class FavoritesPageComponent extends BasePageComponent implements AfterViewInit, AfterViewChecked{
  public pageModel: FavoritesPageModel = new FavoritesPageModel();
  @ViewChildren('list') artifactLists!: QueryList<ArtifactListComponent>;

  RegroupArtifacts(event: Event) {
    const groupByValue = (event.target as HTMLInputElement).value;
    this.pageModel.groupedArtifacts = Utils.GroupArtifacts(groupByValue, this.pageModel.allFavorites ?? []);
  }

  ngAfterViewInit(){
  }

  ngAfterViewChecked(): void {
  }
}
