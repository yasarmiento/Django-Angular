import { Component, Input, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { OperadoresI } from 'src/app/models/operadores.model';
import { OperadorService } from 'src/app/services/operador.service';

import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-operador',
  templateUrl: './operador.component.html',
  styleUrls: ['./operador.component.css']
})
export class OperadorComponent implements OnInit{

  @Input() viewMode = false;

  @Input() currentOperadoresI: OperadoresI = {
    operador: '',
  };

  message = '';

  operadores : any;

  constructor (
    private operadorService: OperadorService,
    private route: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit(): void {
    if (!this.viewMode) {
      this.message = '';
      this.getOperador(this.route.snapshot.params["id"]);
    }
  }

  getOperador(id: string): void {
    this.operadorService.get(id)
      .subscribe({
        next: (data) => {
          this.currentOperadoresI = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }

  updateOperador(): void {
    this.message = '';

    this.operadorService.update(this.currentOperadoresI.id, this.currentOperadoresI)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.router.navigate(['/operadorform']);
        },
        error: (e) => console.error(e)
      });
  }

  deleteOperador(): void {
    this.operadorService.delete(this.currentOperadoresI.id)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.router.navigate(['/operadorform']);
        },
        error: (e) => console.error(e)
      });
  }
}
  

