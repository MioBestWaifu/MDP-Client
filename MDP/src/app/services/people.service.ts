import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { Person } from '../models/persons/person';

@Injectable({
  providedIn: 'root'
})
export class PeopleService {
  private baseURL = environment.baseURL + "people";
  jsonHeader = new HttpHeaders().set('content-type', 'application/json');

  constructor(private http: HttpClient) { }

  Search(query:string):Observable<Person[]>{
    return this.http.get<Person[]>(this.baseURL+"/search?query="+query);
  }
}
