import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { Person } from '../models/persons/person';
import { PersonParticipation } from '../models/persons/person-participation';
import { PersonInsert } from '../models/persons/person-insert';
import { CompanyPerson } from '../models/companies/company-person';

@Injectable({
  providedIn: 'root'
})
export class PeopleService {
  private baseURL = environment.baseURL + "people";
  jsonHeader = new HttpHeaders().set('content-type', 'application/json');

  constructor(private http: HttpClient) { }

  Create(person: PersonInsert): Observable<Person> {
    return this.http.post<Person>(this.baseURL, JSON.stringify(person), { headers: this.jsonHeader });
  }

  Retrieve(id: number): Observable<Person> {
    return this.http.get<Person>(`${this.baseURL}/${id}`);
  }

  Update(person: Person): Observable<Person> {
    return this.http.patch<Person>(this.baseURL, JSON.stringify(person), { headers: this.jsonHeader });
  }

  Delete(id: number): Observable<boolean> {
    return this.http.delete<boolean>(`${this.baseURL}/${id}`);
  }

  Search(term: string): Observable<Person[]> {
    return this.http.get<Person[]>(`${this.baseURL}/search?query=${term}`);
  }

  GetParticipatedWorks(id: number): Observable<PersonParticipation[]> {
    return this.http.get<PersonParticipation[]>(`${this.baseURL}/${id}/works`);
  }

  UpdateParticipatedWorks(id: number, works: PersonParticipation[]): Observable<PersonParticipation[]> {
    return this.http.patch<PersonParticipation[]>(`${this.baseURL}/${id}/works`, JSON.stringify(works), { headers: this.jsonHeader });
  }

  GetParticipatedCompanies(id: number): Observable<CompanyPerson[]> {
    return this.http.get<CompanyPerson[]>(`${this.baseURL}/${id}/companies`);
  }

  UpdateParticipatedCompanies(id: number, companies: CompanyPerson[]): Observable<CompanyPerson[]> {
    return this.http.patch<CompanyPerson[]>(`${this.baseURL}/${id}/companies`, JSON.stringify(companies), { headers: this.jsonHeader });
  }
}