import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Dictionary } from '../classes/dictionary';
import { Utils } from '../classes/utils';
import { BasePageModel } from '../models/pages/base-page-model';
import { environment } from '../../environments/environment';
import { CommonContainerService } from './common-container.service';

@Injectable({
  providedIn: 'root'
})
export class PageLoadingService {
  private baseURL = environment.baseURL;
  private pages = "pages/";
  public community = this.baseURL + this.pages + "community";
  public company = this.baseURL + this.pages + "company";
  public favorites = this.baseURL + this.pages + "favorites";
  public home = this.baseURL + this.pages + "home";
  public interestSetup = this.baseURL + this.pages + "interestSetup";
  public interestUpdate = this.baseURL + this.pages + "interestUpdate";
  public person = this.baseURL + this.pages + "person";
  public search = this.baseURL + this.pages + "search";
  public sign = this.baseURL + this.pages + "sign";
  public user = this.baseURL + this.pages + "user";
  public work = this.baseURL + this.pages + "work";
  public anime = this.work + "anime";
  public book = this.work + "book";
  public game = this.work + "game";
  public manga = this.work + "manga";
  public music = this.work + "music";

  constructor(private http: HttpClient, private common:CommonContainerService) { }

  LoadPage(page: string): Observable<BasePageModel> {
    return this.http.get<BasePageModel>(page);
  }

  LoadPageWithParams(page: string, params: Dictionary<string,string>): Observable<BasePageModel> {
    const resolvedParams = Utils.ResolveParams(params);
    return this.http.get<BasePageModel>(`${page}?${resolvedParams}`);
  }
}