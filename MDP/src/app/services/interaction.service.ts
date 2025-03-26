import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Review } from '../models/review';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class InteractionService {
  private baseURL = environment.baseURL;
  private rate = this.baseURL + "rate/";
  public rateUser = this.rate + "user";
  public ratePerson = this.rate + "person";
  public rateCompany = this.rate + "company";
  public rateWork = this.baseURL+"works/review";
  jsonHeader = new HttpHeaders().set('content-type', 'application/json');

  constructor(private http: HttpClient) { }

  Rate(url: string, rating: number, id: number): Observable<void> {
    return this.http.patch<void>(`${url}?id=${id}`, { rating });
  }

  RateWork(review:Review): Observable<boolean>{
    console.log(JSON.stringify(review));
    return this.http.get<boolean>(`${this.rateWork}?artifactId=${review.artifactId}&rate=${review.rating}&userId=${review.user.id}`);
  }
}