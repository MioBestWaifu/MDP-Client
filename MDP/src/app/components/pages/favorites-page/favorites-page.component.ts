import { Component } from '@angular/core';
import { Utils } from '../../../classes/utils';
import { FavoritesPageModel } from '../../../models/pages/favorites-page-model';
import { BasePageComponent } from '../base-page/base-page.component';

@Component({
  selector: 'mdp-favorites-page',
  templateUrl: './favorites-page.component.html',
  styleUrl: './favorites-page.component.scss'
})
export class FavoritesPageComponent extends BasePageComponent {
  public pageModel: FavoritesPageModel = new FavoritesPageModel();

  override ngOnInit() {
    super.ngOnInit();
    /* this.connection.LoadPage(this.connection.favorites).subscribe(result => {
      this.pageModel = result as FavoritesPageModel;
    }); */
  }

  RegroupArtifacts(event: Event) {
    const groupByValue = (event.target as HTMLInputElement).value;
    this.pageModel.groupedArtifacts = Utils.GroupArtifacts(groupByValue, this.pageModel.allFavorites ?? []);
  }
}
