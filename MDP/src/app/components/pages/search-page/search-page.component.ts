import { Component } from '@angular/core';
import { SearchPageModel } from '../../../models/pages/search-page-model';
import { BasePageComponent } from '../base-page/base-page.component';
import { Dictionary } from '../../../classes/dictionary';

@Component({
  selector: 'mdp-search-page',
  templateUrl: './search-page.component.html',
  styleUrl: './search-page.component.scss'
})
export class SearchPageComponent extends BasePageComponent {
  query: string = '';
  public pageModel: SearchPageModel = new SearchPageModel();

  override ngOnInit() {
    super.ngOnInit();
    const queryParamsMap = this.route.snapshot.queryParamMap;
    const queryDictionary = new Dictionary<string,string>();
    queryParamsMap.keys.forEach(key => {
      queryDictionary.Add(key,queryParamsMap.get(key) ?? '');
    });
    this.query = queryDictionary.Get('query')??'';
    console.log(queryDictionary);
    console.log(this.query);
    /* this.connection.LoadPageWithParams(this.connection.search, queryDictionaty).subscribe(result => {
      this.pageModel = result as SearchPageModel;
    }); */
  }
}
