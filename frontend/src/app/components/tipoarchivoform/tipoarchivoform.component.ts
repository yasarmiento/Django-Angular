import { Component, OnInit } from '@angular/core';
import { TipoarchivoService } from 'src/app/services/tipoarchivo.service';
import { TipoarchivoI } from 'src/app/models/tipoarchivo.model';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-tipoarchivoform',
  templateUrl: './tipoarchivoform.component.html',
  styleUrls: ['./tipoarchivoform.component.css']
})
export class TipoarchivoformComponent implements OnInit {

  tiposarchivos: any;

  tipoarchivo?: TipoarchivoI[];
  currentTipoarchivoI: TipoarchivoI = {
    nombre_archivo: ''
  }
  currentIndex = -1;

  constructor (private taService: TipoarchivoService, private http: HttpClient) {}

  ngOnInit(): void {
    this.retrieveTipoarchivo();
    this.http.get("http://127.0.0.1:8000/tipos_archivo")
      .subscribe(
        proyecto => {
          this.tiposarchivos = proyecto;
        }
      );
  }

  retrieveTipoarchivo(): void {
    this.taService.getAll()
      .subscribe({
        next: (data) => {
          this.tiposarchivos = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      })
  }

  refreshList(): void{
    this.retrieveTipoarchivo();
    this.currentTipoarchivoI = {nombre_archivo: ''};
    this.currentIndex = -1;
  }

  setActiveTipoarchivo(operadores: TipoarchivoI, index: number): void {
    this.currentTipoarchivoI = operadores;
    this.currentIndex = index;
  }

}
