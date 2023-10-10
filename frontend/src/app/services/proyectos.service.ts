import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ProyectosI } from '../models/proyectos.model';

const base = 'http://127.0.0.1:8000'


@Injectable({
  providedIn: 'root'
})
export class ProyectosService {
  api_uri = "http://127.0.0.1:8000";
  base_path = `${this.api_uri}/`
  constructor(
    private http:HttpClient
  ) { }

  getAllProyectos():Observable<{proyecto:ProyectosI[]}>{
    return this.http
      .get<{proyecto:ProyectosI[]}>(this.base_path)
  }

  getAll(): Observable<ProyectosI[]>{
    return this.http.get<ProyectosI[]>(base);
  }

  get(id: any): Observable<ProyectosI> {
    return this.http.get<ProyectosI>(`${base}/${id}`);
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

  getRolU(): Observable<any[]> {
    return this.http.get<any[]>(`${base}/roles_universidad`);
  }
  
  getConvocatoria(): Observable<any[]> {
    return this.http.get<any[]>(`${base}/convocatorias`);
  }
  getOperador(): Observable<any[]> {
    return this.http.get<any[]>(`${base}/operadores`);
  }
  
  getEntidadF(): Observable<any[]> {
    return this.http.get<any[]>(`${base}/entidades_financiadoras`);
  }
  getGrupoInvestigacion(): Observable<any[]> {
    return this.http.get<any[]>(`${base}`);
  }

}
