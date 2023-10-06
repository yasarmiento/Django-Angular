import { Component, OnInit } from '@angular/core';
import { ArchivoI } from 'src/app/models/archivo.model';
import { ArchivoService } from 'src/app/services/archivo.service';
import { HttpClient } from '@angular/common/http';
import { TipoarchivoI } from 'src/app/models/tipoarchivo.model';


@Component({
  selector: 'app-archivoform',
  templateUrl: './archivoform.component.html',
  styleUrls: ['./archivoform.component.css']
})
export class ArchivoformComponent implements OnInit {

  archivos: any;

  archivo?: TipoarchivoI[];

  currentArchivoI: ArchivoI = {
    archivo: '',
    nombre_archivo_id: '',
    proyectoid: ''
  };

  currentIndex = -1;

  constructor(private archivoService: ArchivoService, private http: HttpClient) { }


  ngOnInit(): void {
    this.retrieveArchivo();
    this.http.get("http://127.0.0.1:8000/archivos")
      .subscribe(
        proyecto => {
          this.archivos = proyecto;
        }
      );
  }

  retrieveArchivo(): void {
    this.archivoService.getAll()
      .subscribe({
        next: (data) => {
          this.archivos = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }

  refreshList(): void {
    this.retrieveArchivo();
    this.currentArchivoI = { 
      archivo: '',
      nombre_archivo_id: '',
      proyectoid: ''
    };

    this.currentIndex = -1;
  }

  setActiveArchivo(operadores: ArchivoI, index: number): void {
    this.currentArchivoI = operadores;
    this.currentIndex = index;
  }
}
