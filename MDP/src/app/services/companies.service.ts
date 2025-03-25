import { Injectable } from '@angular/core';
import { Company } from '../models/companies/company';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CompaniesService {
private baseURL = environment.baseURL + "companies";
  jsonHeader = new HttpHeaders().set('content-type', 'application/json');

  constructor(private http: HttpClient) { }

  Search(query:string):Observable<Company[]>{
    return this.http.get<Company[]>(this.baseURL+"/search?query="+query);
  }
}
