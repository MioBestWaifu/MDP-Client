import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { Company } from '../models/companies/company';
import { CompanyParticipation } from '../models/companies/company-participation';
import { PersonParticipation } from '../models/persons/person-participation';
import { CompanyInsert } from '../models/companies/company-insert';
import { CompanyPerson } from '../models/companies/company-person';

@Injectable({
  providedIn: 'root'
})
export class CompaniesService {
  private baseURL = environment.baseURL + "companies";
  jsonHeader = new HttpHeaders().set('content-type', 'application/json');

  constructor(private http: HttpClient) { }

  Create(company: CompanyInsert): Observable<Company> {
    return this.http.post<Company>(this.baseURL, JSON.stringify(company), { headers: this.jsonHeader });
  }

  Retrieve(id: number): Observable<Company> {
    return this.http.get<Company>(`${this.baseURL}/${id}`);
  }

  Update(company: Company): Observable<Company> {
    return this.http.patch<Company>(this.baseURL, JSON.stringify(company), { headers: this.jsonHeader });
  }

  Delete(id: number): Observable<boolean> {
    return this.http.delete<boolean>(`${this.baseURL}/${id}`);
  }

  Search(term: string): Observable<Company[]> {
    return this.http.get<Company[]>(`${this.baseURL}/search?query=${term}`);
  }

  GetParticipatedArtifacts(id: number): Observable<CompanyParticipation[]> {
    return this.http.get<CompanyParticipation[]>(`${this.baseURL}/${id}/works`);
  }

  UpdateParticipatedArtifacts(id: number, artifacts: CompanyParticipation[]): Observable<CompanyParticipation[]> {
    return this.http.patch<CompanyParticipation[]>(`${this.baseURL}/${id}/works`, JSON.stringify(artifacts), { headers: this.jsonHeader });
  }

  GetParticipantPeople(id: number): Observable<CompanyPerson[]> {
    return this.http.get<CompanyPerson[]>(`${this.baseURL}/${id}/people`);
  }

  UpdateParticipantPeople(id: number, people: CompanyPerson[]): Observable<CompanyPerson[]> {
    return this.http.patch<CompanyPerson[]>(`${this.baseURL}/${id}/people`, JSON.stringify(people), { headers: this.jsonHeader });
  }
}
