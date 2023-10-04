import { Component, OnInit } from '@angular/core';
import { OperadorService } from 'src/app/services/operador.service';
import { OperadoresI } from 'src/app/models/operadores.model';

@Component({
  selector: 'app-operadoradd',
  templateUrl: './operadoradd.component.html',
  styleUrls: ['./operadoradd.component.css']
})
export class OperadoraddComponent implements OnInit {

  operadores: OperadoresI = {
    operador: '',
  };
  submitted = false;

  constructor(private operadorService: OperadorService) {}

  ngOnInit(): void {
    
  }

  saveOperador(): void {
    const data = {
      operador: this.operadores.operador
    };

    this.operadorService.create(data)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.submitted = true;
        },
        error: (e) => console.error(e)        
      })
  }

  newOperador(): void {
    this.submitted = false;
    this.operadores = {
      operador: ''
    };
  }
}
