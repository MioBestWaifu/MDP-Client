import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Media } from '../models/accessory/media';
import { Category } from '../models/accessory/category';
import { Demographic } from '../models/accessory/demographic';
import { AgeRating } from '../models/accessory/age-rating';

@Injectable({
  providedIn: 'root'
})
export class AccessoryService {
  private baseURL = environment.baseURL + "accessory/";

  constructor(private http: HttpClient) { }

  LoadAllMedias(): Observable<Media[]>{
    return this.http.get<Media[]>(this.baseURL + "medias");
  }

  LoadAllCategories(): Observable<Category[]>{
    return this.http.get<Category[]>(this.baseURL + "categories");
  }

  LoadAllDemographics(): Observable<Demographic[]>{
    return this.http.get<Demographic[]>(this.baseURL + "demographics");
  }

  LoadAllAgeRatings(): Observable<AgeRating[]>{
    return this.http.get<AgeRating[]>(this.baseURL + "age-ratings");
  }
}
