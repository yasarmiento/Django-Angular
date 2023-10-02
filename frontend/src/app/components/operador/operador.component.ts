import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { OperadoresI } from 'src/app/models/operadores.model';
import { OperadorService } from 'src/app/services/operador.service';

import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-operador',
  templateUrl: './operador.component.html',
  styleUrls: ['./operador.component.css']
})
export class OperadorComponent {
  operadores : any;

  constructor (
    private operadoresServices: OperadorService,
    private router: Router,
    private http: HttpClient,
  ) { }

  ngOnInit(): void {
    this.mostrarOperadores()
  }
  mostrarOperadores() {
    this.http.get("http://127.0.0.1:8000/operadores")
      .subscribe(
        operador => {
          this.operadores = operador;
        }
      );
  }
}
