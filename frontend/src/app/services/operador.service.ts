import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { OperadoresI } from '../models/operadores.model';

@Injectable({
  providedIn: 'root'
})
export class OperadorService {
  api_uri = "http://127.0.0.1:8000";
  base_path = `${this.api_uri}/operadores`
  constructor(
    private http:HttpClient
  ) { }

  getAllOperadores():Observable<{operador:OperadoresI[]}>{
    return this.http
      .get<{operador:OperadoresI[]}>(this.base_path)
  }
}
