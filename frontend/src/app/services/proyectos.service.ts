import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ProyectosI } from '../models/proyectos.model';
import { SeguimientosI } from '../models/seguimientos.models';

const base = 'http://127.0.0.1:8000/proyectos'
const baseSeg ='http://127.0.0.1:8000/seguimientos'
const baseUrl = 'http://127.0.0.1:8000/'


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

  update(data: any): Observable<any> {
    return this.http.put(`${base}/${data.id}`, data);
  }  

  delete(id: any): Observable<any> {
    return this.http.delete(`${base}/${id}`);
  }

  getRolU(): Observable<any[]> {
    return this.http.get<any[]>(`${baseUrl}/roles_universidad`);
  }

  getConvocatoria(): Observable<any[]> {
    return this.http.get<any[]>(`${baseUrl}/convocatorias`);
  }
  getOperador(): Observable<any[]> {
    return this.http.get<any[]>(`${baseUrl}/operadores`);
  }

  getEntidadF(): Observable<any[]> {
    return this.http.get<any[]>(`${baseUrl}/entidades_financiadoras`);
  }
  getGrupoInvestigacion(): Observable<any[]> {
    return this.http.get<any[]>(`${baseUrl}/grupos_investigacion`);
  }

  guardarCambios(proyectoEditado: ProyectosI): Observable<ProyectosI> {
    const url = `${base}/${proyectoEditado.id}`;
    return this.http.put<ProyectosI>(url, proyectoEditado);
  }

  getSeguimientos(): Observable<SeguimientosI[]> {
    return this.http.get<SeguimientosI[]>(baseSeg);
  }

}
