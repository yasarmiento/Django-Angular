import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ArchivoI } from '../models/archivo.model';

const baseUrl = 'http://127.0.0.1:8000/archivos'
const base = 'http://127.0.0.1:8000'
//'/tipos_archivo'
@Injectable({
  providedIn: 'root'
})
export class ArchivoService {

  constructor(private http:HttpClient) { }

  getAll(): Observable<ArchivoI[]>{
    return this.http.get<ArchivoI[]>(baseUrl);
  }

  get(id: any): Observable<ArchivoI> {
    return this.http.get<ArchivoI>(`${baseUrl}/${id}`);
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

  getNombresArchivos(): Observable<any[]> {
    return this.http.get<any[]>(`${base}/tipos_archivo`);
  }
  
  getProyectos(): Observable<any[]> {
    return this.http.get<any[]>(`${base}`);
  }

}
