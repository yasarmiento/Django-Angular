import { Component, OnInit } from '@angular/core';
import { ArchivoI } from 'src/app/models/archivo.model';
import { ArchivoService } from 'src/app/services/archivo.service';
import { HttpClient } from '@angular/common/http';
import { TipoarchivoI } from 'src/app/models/tipoarchivo.model';
import { MessageService } from 'primeng/api';


@Component({
  selector: 'app-archivoform',
  templateUrl: './archivoform.component.html',
  styleUrls: ['./archivoform.component.css']
})
export class ArchivoformComponent implements OnInit {

  archivos: any;
  archivo?: TipoarchivoI[];
  visible: boolean = false;
  currentArchivoI: ArchivoI = {
    archivo: '',
    nombre_archivo_id: '',
    proyectoid: ''
  };

  archivosCrear: ArchivoI = {
    archivo: '',
    nombre_archivo_id: '',
    proyectoid: ''
  }
  archivoseleccionado: File | undefined;
  submitted = false;
  nombresArchivos: any[] = [];
  proyectos: any[] = [];
  currentIndex = -1;

  constructor(private archivoService: ArchivoService, private http: HttpClient,
    private messageService: MessageService) { }


  ngOnInit(): void {
    this.retrieveArchivo();
    this.http.get("http://127.0.0.1:8000/archivos")
      .subscribe(
        proyecto => {
          this.archivos = proyecto;
        }
      );
    this.obtenerDatos();
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

  showDialog() {
    this.visible = true;
  }

  CerrarDialog() { 
    this.visible = false;
  }

  obtenerDatos(): void {
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
      data.append('nombre_archivo_id', this.archivosCrear.nombre_archivo_id)
      data.append('proyectoid', this.archivosCrear.proyectoid)

      this.archivoService.create(data)
        .subscribe({
          next: (res) => {
            console.log(res);
            this.submitted = true;
            console.log("archivo cargado")
            this.CerrarDialog();
            this.messageService.add({ severity: 'success', summary: 'archivo cargado', detail: 'el archivo se cargo exitossamente al proyecto seleccionado' })
          },
          error: (e) => console.error(e)
        })
    } else {
      console.error("ERRORRR");
      this.messageService.add({ severity: 'error', summary: 'error al cargar el archivo' })
    }
  }

  newArchivo(): void {
    this.submitted = false;
    this.archivosCrear = {
      archivo: '',
      nombre_archivo_id: '',
      proyectoid: ''
    };
  }

  onFileSelect(event: any): void {
    this.archivoseleccionado = (event.files as File[])[0];
  }
}
