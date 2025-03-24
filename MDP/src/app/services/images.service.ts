import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { ImageInsert } from '../models/image-insert';
import { Observable } from 'rxjs';
import { Image } from '../models/image';

@Injectable({
  providedIn: 'root'
})
export class ImagesService {
  private baseURL = environment.baseURL + "images";
  jsonHeader = new HttpHeaders().set('content-type', 'application/json');

  constructor(private http: HttpClient) { }

  Create(image:ImageInsert): Observable<Image>{
    return this.http.post<Image>(this.baseURL, JSON.stringify(image), {headers: this.jsonHeader});
  }
}
