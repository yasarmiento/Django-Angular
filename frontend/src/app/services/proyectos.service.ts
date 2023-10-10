import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ProyectosI } from '../models/proyectos.model';

const base = 'http://127.0.0.1:8000'


@Injectable({
  providedIn: 'root'
})
export class ProyectosService {

  constructor(
    private http: HttpClient
  ) { }

  getAll(): Observable<ProyectosI[]> {
    return this.http.get<ProyectosI[]>(base);
  }

  get(id: any): Observable<ProyectosI> {
    return this.http.get<ProyectosI>(`${base}/${id}`);
  }

  create(data: any): Observable<any> {
    return this.http.post(`${base}`, data);
  }

  update(proyecto: ProyectosI): Observable<any> {
    return this.http.put(`${base}/proproyectos/${proyecto.id}`, proyecto);
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
    return this.http.get<any[]>(`${base}/grupos_investigacion`);
  }

}
