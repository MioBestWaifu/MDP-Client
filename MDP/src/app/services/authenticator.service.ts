import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CommonContainerService } from './common-container.service';
import { Token } from '../classes/token';
import { environment } from '../../environments/environment';
import { User } from '../models/users/user';

@Injectable({
  providedIn: 'root'
})
export class AuthenticatorService {
  private readonly baseURL = environment.baseURL+"auth";
  jsonHeader = new HttpHeaders().set('content-type', 'application/json');

  constructor(private common: CommonContainerService, private http: HttpClient) { }

  Login(user:User): Observable<User> {
    return this.http.post<User>(this.baseURL+"/login", user,{headers: this.jsonHeader});
  }

  Register(user:User): Observable<boolean> {
    return this.http.post<boolean>(this.baseURL+"/register", user,{headers: this.jsonHeader});
  }
}