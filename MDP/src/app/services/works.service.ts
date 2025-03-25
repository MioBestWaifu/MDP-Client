import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { ArtifactInsert } from '../models/artifacts/artifact-insert';
import { Observable } from 'rxjs';
import { Artifact } from '../models/artifacts/artifact';

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
}
