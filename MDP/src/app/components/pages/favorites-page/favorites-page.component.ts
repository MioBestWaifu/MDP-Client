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

  override ngOnInit() {
    super.ngOnInit();
    /* this.connection.LoadPage(this.connection.favorites).subscribe(result => {
      this.pageModel = result as FavoritesPageModel;
    }); */
    this.common.barToggleEvent.subscribe(event => {
      console.log('Toggle bar event received in Home Page');
      let x:number;
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

      this.artifactLists.forEach(artifactList => {
        artifactList.RecalculateRows(x);
      });

    });
  }

  RegroupArtifacts(event: Event) {
    const groupByValue = (event.target as HTMLInputElement).value;
    this.pageModel.groupedArtifacts = Utils.GroupArtifacts(groupByValue, this.pageModel.allFavorites ?? []);
    setTimeout(() => {
      this.artifactLists.forEach(artifactList => {
        artifactList.RecalculateRows(Utils.GetContextualMaxWidth("favoritesArtifactsExpanded"));
      });
    });
  }

  ngAfterViewInit(){
    this.artifactLists.forEach(artifactList => {
      artifactList.RecalculateRows(Utils.GetContextualMaxWidth("favoritesArtifactsExpanded"));
    });
  }

  ngAfterViewChecked(): void {
  }
}
