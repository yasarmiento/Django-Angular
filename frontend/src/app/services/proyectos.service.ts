import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ProyectosI } from '../models/proyectos.model';

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
}
