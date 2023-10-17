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
  archivoNombre: string = '';
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
    this.archivoService.getAarchivos()
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
      console.log("tipos de archivos: ", this.nombresArchivos)
    });

    this.archivoService.getProyectos().subscribe((data) => {
      this.proyectos = data;
    });
  }

  obtenerNombresArchivos(archivoId: number){
    const archivo = this.nombresArchivos.find(r => r.id === archivoId);
    return archivo ? `${archivo.nombre_archivo}` : 'archivo no encontrado'
  }

  obtenerNombresProyectos(proyectoId: number){
    const proyecto = this.proyectos.find(r => r.id === proyectoId);
    return proyecto ? `${proyecto.proyecto}` : 'archivo no encontrado'
  }

  saveArchivo(): void {
    if (this.archivoseleccionado != null) {
      const data = new FormData();
      data.append('archivo', this.archivoseleccionado);
      data.append('nombre_archivo_id', this.archivosCrear.nombre_archivo_id);
      data.append('proyectoid', this.archivosCrear.proyectoid);
  
      if (this.currentIndex !== -1) {
        // Llama al método de actualización en lugar de creación
        this.archivoService.update(this.archivos[this.currentIndex].id, data)
          .subscribe({
            next: (res) => {
              console.log(res);
              this.submitted = true;
              console.log("archivo actualizado");
              this.CerrarDialog();
              this.messageService.add({ severity: 'success', summary: 'archivo actualizado', detail: 'Los cambios se guardaron exitosamente' });
              // Actualiza los datos en la tabla
              this.archivos[this.currentIndex] = { ...this.archivosCrear };
            },
            error: (e) => console.error(e)
            
          });
      } else {
        // Llama al método de creación si no estás editando
        this.archivoService.create(data)
          .subscribe({
            next: (res) => {
              console.log(res);
              this.submitted = true;
              console.log("archivo cargado");
              this.CerrarDialog();
              this.messageService.add({ severity: 'success', summary: 'archivo cargado', detail: 'El archivo se cargó exitosamente al proyecto seleccionado' });
              // Agrega los nuevos datos a la tabla
              this.archivos.push({ ...this.archivosCrear });
            },
            error: (e) => console.error(e)
          });
      }
    } else {
      console.error("ERRORRR");
      this.messageService.add({ severity: 'error', summary: 'error al cargar el archivo' });
    }
  }

  editArchivo(rowData: any): void {
    // Cargar los detalles del archivo en el formulario de edición
    this.archivoNombre = rowData.archivo.split('/').pop();
    this.archivosCrear = {
      archivo: rowData.archivo,
      nombre_archivo_id: rowData.nombre_archivo_id,
      proyectoid: rowData.proyectoid
    };
    this.currentIndex = this.archivos.indexOf(rowData);
    console.log("archivo a editar: ",this.archivosCrear)
    this.showDialog(); // Mostrar el formulario de edición en la ventana modal
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

  getFileName(url: string): string {
    if (url) {
      const parts = url.split('/');
      return parts[parts.length - 1];
    }
    return '';
  }
  
}
