import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CommonContainerService } from './common-container.service';
import { Token } from '../classes/token';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthenticatorService {
  private readonly URL = environment.baseURL+"/auth";

  constructor(private common: CommonContainerService, private http: HttpClient) { }

  Authenticate(): Observable<Token> {
    return this.http.post<Token>(this.URL, this.common.user);
  }
}