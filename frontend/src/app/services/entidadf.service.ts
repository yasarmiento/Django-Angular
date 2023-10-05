import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { OperadoresI } from '../models/operadores.model';
import { EntidadFinanciadoraI } from '../models/entidadf.model';

const baseUrl = 'http://127.0.0.1:8000/entidades_financiadoras'
@Injectable({
  providedIn: 'root'
})
export class EntidadfService {

  constructor(private http:HttpClient) { }

  getAll(): Observable<EntidadFinanciadoraI[]>{
    return this.http.get<EntidadFinanciadoraI[]>(baseUrl);
  }

  get(id: any): Observable<EntidadFinanciadoraI> {
    return this.http.get<EntidadFinanciadoraI>(`${baseUrl}/${id}`);
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
