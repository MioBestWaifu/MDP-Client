import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CommonContainerService } from './common-container.service';
import { Token } from '../classes/token';

@Injectable({
  providedIn: 'root'
})
export class AuthenticatorService {
  private readonly URL = "https://api.yancosta.online/mdp/auth";

  constructor(private common: CommonContainerService, private http: HttpClient) { }

  Authenticate(): Observable<Token> {
    return this.http.post<Token>(this.URL, this.common.user);
  }
}