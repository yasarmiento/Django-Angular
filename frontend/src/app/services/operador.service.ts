import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { OperadoresI } from '../models/operadores.model';

const  baseUrl = 'http://127.0.0.1:8000/operadores'
@Injectable({
  providedIn: 'root'
})
export class OperadorService {

  constructor(private http:HttpClient) {}

  getAll(): Observable<OperadoresI[]>{
    return this.http.get<OperadoresI[]>(baseUrl);
  }
  
  get(id: any): Observable<OperadoresI> {
    return this.http.get(`${baseUrl}/${id}`);
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

  findByOperadores(operadores: any): Observable<OperadoresI[]> {
    return this.http.get<OperadoresI[]>(`${baseUrl}?operador=${operadores}`);
  }
}
