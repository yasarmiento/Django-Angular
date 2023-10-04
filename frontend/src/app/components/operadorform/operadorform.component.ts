import { Component, OnInit } from '@angular/core';
import { OperadoresI } from 'src/app/models/operadores.model';
import { OperadorService } from 'src/app/services/operador.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-operadorform',
  templateUrl: './operadorform.component.html',
  styleUrls: ['./operadorform.component.css']
})
export class OperadorformComponent implements OnInit{
  archivos: any;

  operadores?: OperadoresI[];
  currentOperadoresI: OperadoresI = {};
  currentIndex = -1;
  operador = '';

  constructor (private operadorService: OperadorService,private http: HttpClient) {}

  ngOnInit(): void {
    this.retrieveOperadores();
    this.http.get("http://127.0.0.1:8000/operadores")
      .subscribe(
        proyecto => {
          this.archivos = proyecto;
        }
      );
  }

  retrieveOperadores(): void {
    this.operadorService.getAll()
      .subscribe({
        next: (data) => {
          this.operadores = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      })
  }

  refreshList(): void{
    this.retrieveOperadores();
    this.currentOperadoresI = {};
    this.currentIndex = -1;
  }

  setActiveOperadores(operadores: OperadoresI, index: number): void {
    this.currentOperadoresI = operadores;
    this.currentIndex = index;
  }

  
}
