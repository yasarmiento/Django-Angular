import { Component, OnInit } from '@angular/core';
import { EntidadFinanciadoraI } from 'src/app/models/entidadf.model';
import { EntidadfService } from 'src/app/services/entidadf.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-entidadfform',
  templateUrl: './entidadfform.component.html',
  styleUrls: ['./entidadfform.component.css']
})
export class EntidadfformComponent implements OnInit {
  entidad: any;

  entidadf?: EntidadFinanciadoraI[];
  currentEntidadFI: EntidadFinanciadoraI = {
    entidadfinanciadora: ''
  };
  currentIndex = -1;
  constructor (private entidadfService: EntidadfService, private http: HttpClient) {}

  ngOnInit(): void {
    this.retrieveEntidadf();
    this.http.get("http://127.0.0.1:8000/entidades_financiadoras")
      .subscribe(
        proyecto => {
          this.entidad = proyecto;
        }
      );
  }

  retrieveEntidadf(): void {
    this.entidadfService.getAll()
      .subscribe({
        next: (data) => {
          this.entidadf = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      })
  }

  refreshList(): void{
    this.retrieveEntidadf();
    this.currentEntidadFI = {entidadfinanciadora: ''};
    this.currentIndex = -1;
  }

  setActiveEntidadf(operadores: EntidadFinanciadoraI, index: number): void {
    this.currentEntidadFI = operadores;
    this.currentIndex = index;
  }


}
