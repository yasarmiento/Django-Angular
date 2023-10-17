import { Injectable } from '@angular/core';
import { SeguimientosI } from '../models/seguimientos.models';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const baseUrl = 'http://127.0.0.1:8000/'
const base = 'http://127.0.0.1:8000/seguimientos'

@Injectable({
  providedIn: 'root'
})
export class SeguimientosService {

  constructor(
    private http: HttpClient
  ) { }

  getSeg(): Observable<SeguimientosI[]> {
    return this.http.get<SeguimientosI[]>(base);
  }

  get(id: any): Observable<SeguimientosI> {
    return this.http.get<SeguimientosI>(`${base}/${id}`);
  }

  create(data: any): Observable<any> {
    return this.http.post(`${base}`, data);
  }

  update(id: any, data: any): Observable<any> {
    return this.http.put(`${base}/${id}`, data);
  }  

  delete(id: any): Observable<any> {
    return this.http.delete(`${base}/${id}`);
  }

  getEstado(): Observable<any[]> {
    return this.http.get<any[]>(`${baseUrl}/estados`);
  }

  getPasos(): Observable<any[]> {
    return this.http.get<any[]>(`${baseUrl}/pasos`);
  }
  getProyectos(): Observable<any[]> {
    return this.http.get<any[]>(`${baseUrl}/proyectos`);
  }

  getTareaAnterior(): Observable<any[]> {
    return this.http.get<any[]>(`${baseUrl}/seguimientos`);
  }
  getTipoDependencia(): Observable<any[]> {
    return this.http.get<any[]>(`${baseUrl}/tipodependencias`);
  }
}
