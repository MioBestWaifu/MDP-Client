import { Component, QueryList, ViewChildren } from '@angular/core';
import { Utils } from '../../../classes/utils';
import { FavoritesPageModel } from '../../../models/pages/favorites-page-model';
import { BasePageComponent } from '../base-page/base-page.component';
import { ArtifactListComponent } from '../../structure/artifact-list/artifact-list.component';
import { BasePageModel } from '../../../models/pages/base-page-model';

@Component({
  selector: 'mdp-favorites-page',
  templateUrl: './favorites-page.component.html',
  styleUrl: './favorites-page.component.scss'
})
export class FavoritesPageComponent extends BasePageComponent{
  public pageModel: FavoritesPageModel = new FavoritesPageModel();
  @ViewChildren('list') artifactLists!: QueryList<ArtifactListComponent>;

  override ngOnInit() {
    super.ngOnInit();
    this.connection.LoadPage(this.connection.favorites).subscribe((result: BasePageModel) => {
      this.pageModel = result as FavoritesPageModel;
      this.RegroupArtifactsByString('media');
    });
  }

  RegroupArtifacts(event: Event) {
    const groupByValue = (event.target as HTMLInputElement).value;
    this.pageModel.groupedArtifacts = Utils.GroupArtifacts(groupByValue, this.pageModel.allFavorites ?? []);
  }

  RegroupArtifactsByString(event: string) {
    this.pageModel.groupedArtifacts = Utils.GroupArtifacts(event, this.pageModel.allFavorites ?? []);
  }
}
