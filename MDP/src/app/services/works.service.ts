import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { ArtifactInsert } from '../models/artifacts/artifact-insert';
import { Observable } from 'rxjs';
import { Artifact } from '../models/artifacts/artifact';
import { PersonParticipation } from '../models/persons/person-participation';
import { CompanyParticipation } from '../models/companies/company-participation';

@Injectable({
  providedIn: 'root'
})
export class WorksService {
  private baseURL = environment.baseURL + "works";
  jsonHeader = new HttpHeaders().set('content-type', 'application/json');

  constructor(private http: HttpClient) { }

  Create(artifact:ArtifactInsert): Observable<Artifact>{
    return this.http.post<Artifact>(this.baseURL, JSON.stringify(artifact), {headers: this.jsonHeader});
  }

  Retrieve(id:number): Observable<Artifact>{
    return this.http.get<Artifact>(this.baseURL+"/"+id);
  }

  Update(artifact:Artifact): Observable<Artifact>{
    return this.http.patch<Artifact>(this.baseURL, JSON.stringify(artifact), {headers: this.jsonHeader});
  }

  GetParticipantPeople(id:number):Observable<PersonParticipation[]>{
    return this.http.get<PersonParticipation[]>(this.baseURL+"/"+id+"/people");
  }

  //Also creates
  UpdateParticipantPeople(id:number, people:PersonParticipation[]):Observable<PersonParticipation[]>{
    return this.http.patch<PersonParticipation[]>(this.baseURL+"/"+id+"/people", JSON.stringify(people), {headers: this.jsonHeader});
  }

  GetParticipantCompanies(id: number): Observable<CompanyParticipation[]> {
    return this.http.get<CompanyParticipation[]>(`${this.baseURL}/${id}/companies`);
  }
  
  // Also creates or updates
  UpdateParticipantCompanies(id: number, companies: CompanyParticipation[]): Observable<CompanyParticipation[]> {
    return this.http.patch<CompanyParticipation[]>(`${this.baseURL}/${id}/companies`, JSON.stringify(companies), { headers: this.jsonHeader });
  }
}
