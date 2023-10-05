import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TipoarchivoI } from '../models/tipoarchivo.model';

const baseUrl = 'http://127.0.0.1:8000/tipos_archivo'

@Injectable({
  providedIn: 'root'
})
export class TipoarchivoService {

  constructor(private http:HttpClient) { }

  getAll(): Observable<TipoarchivoI[]>{
    return this.http.get<TipoarchivoI[]>(baseUrl);
  }

  get(id: any): Observable<TipoarchivoI> {
    return this.http.get<TipoarchivoI>(`${baseUrl}/${id}`);
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
