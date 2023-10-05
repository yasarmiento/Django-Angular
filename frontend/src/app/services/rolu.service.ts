import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RolUI } from '../models/rol-u.model';

const baseUrl = 'http://127.0.0.1:8000/roles_universidad'
@Injectable({
  providedIn: 'root'
})
export class RoluService {

  constructor(private http:HttpClient) { }

  getAll(): Observable<RolUI[]>{
    return this.http.get<RolUI[]>(baseUrl);
  }

  get(id: any): Observable<RolUI> {
    return this.http.get<RolUI>(`${baseUrl}/${id}`);
  }
  

  create(data: any): Observable<any> {
    return this.http.post(`${baseUrl}`, data);
  }

  update(id: any, data: any): Observable<any> {
    return this.http.put(`${baseUrl}/${id}`, data);
  }

  delete(id: any): Observable<any> {
    return this.http.delete(`${baseUrl}/${id}`);
  }

}
