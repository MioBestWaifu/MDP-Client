import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InteractionService {
  private baseURL = "https://api.yancosta.online/mdp/";
  private rate = this.baseURL + "rate/";
  public rateUser = this.rate + "user";
  public ratePerson = this.rate + "person";
  public rateCompany = this.rate + "company";
  public rateWork = this.rate + "work";

  constructor(private http: HttpClient) { }

  Rate(url: string, rating: number, id: number): Observable<void> {
    return this.http.patch<void>(`${url}?id=${id}`, { rating });
  }
}