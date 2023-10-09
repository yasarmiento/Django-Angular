import { Component, OnInit } from '@angular/core';
import { ArchivoI } from 'src/app/models/archivo.model';
import { ArchivoService } from 'src/app/services/archivo.service';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-archivoadd',
  templateUrl: './archivoadd.component.html',
  styleUrls: ['./archivoadd.component.css']
})
export class ArchivoaddComponent implements OnInit {

  archivos: ArchivoI = {
    archivo: '',
    nombre_archivo_id: '',
    proyectoid: ''
  }

  archivoseleccionado: File | undefined;

  submitted = false;

  nombresArchivos: any[] = [];
  proyectos: any[] = [];

  constructor(
    private archivoService: ArchivoService,
    private messageService: MessageService
    ) { }

  ngOnInit(): void {
    this.archivoService.getNombresArchivos().subscribe((data) => {
      this.nombresArchivos = data;
    });

    this.archivoService.getProyectos().subscribe((data) => {
      this.proyectos = data;
    });

  }

  saveArchivo(): void {
    if (this.archivoseleccionado != null) {
      const data = new FormData();
      data.append('archivo', this.archivoseleccionado)
      data.append('nombre_archivo_id', this.archivos.nombre_archivo_id)
      data.append('proyectoid', this.archivos.proyectoid)

      this.archivoService.create(data)
        .subscribe({
          next: (res) => {
            console.log(res);
            this.submitted = true;
            console.log("archivo cargado")
            this.messageService.add({ severity: 'success', summary: 'archivo cargado', detail: 'el archivo se cargo exitossamente al proyecto seleccionado'})
          },
          error: (e) => console.error(e)
        })
    } else {
       console.error("ERRORRR");
       this.messageService.add({severity: 'error', summary: 'error al cargar el archivo'})
    }
  }

  newArchivo(): void {
    this.submitted = false;
    this.archivos = {
      archivo: '',
      nombre_archivo_id: '',
      proyectoid: ''
    };
  }

  onFileSelect(event: any): void {
    this.archivoseleccionado = (event.files as File[])[0];
  }

}
