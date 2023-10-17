import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SeguimientosService } from 'src/app/services/seguimientos.service';
import { SeguimientosI } from 'src/app/models/seguimientos.models';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-seguimientos',
  templateUrl: './seguimientos.component.html',
  styleUrls: ['./seguimientos.component.css']
})
export class SeguimientosComponent {
  seguimientos: any;
  estado: any[] = [];
  pasos: any[] = [];
  proyecto: any[] = [];
  tareaAnterior: any[] = [];
  tipoDependencia: any[] = [];

  seguimientoEditando: SeguimientosI | null = null;


  nuevoSeguimiento: SeguimientosI = {
    descripciontarea: '',
    duracion: 0,
    tarea_anterior: null,
    diasdependencia: 0,
    tipodependenciaid: null,
    inicio: new Date(),
    fin: new Date(),
    estadoid: null,
    responsable: '',
    fechafin: new Date(),
    pasosid: null,
    proyectoid: null,
  };

  displayDialog = false;

  constructor(private seguimientoService: SeguimientosService, private http: HttpClient,
    private messageService: MessageService) { }

  ngOnInit() {
    this.obtenerSeguimientos();
    this.obtenerDatos();
  }

  guardarSeguimiento() {
    console.log("Guardar Seguimientos...");
    if (this.seguimientoEditando != null) {

      const data = new FormData();
      console.log(this.seguimientoEditando)
      data.append('descripciontarea', this.seguimientoEditando.descripciontarea);
      data.append('duracion', this.seguimientoEditando.duracion.toString());
      data.append('tarea_anterior', this.seguimientoEditando.tarea_anterior);
      data.append('diasdependencia', this.seguimientoEditando.diasdependencia.toString());
      data.append('tipodependenciaid', this.seguimientoEditando.tipodependenciaid);
      data.append('inicio', this.seguimientoEditando.inicio.toString());
      data.append('fin', this.seguimientoEditando.fin.toString());
      data.append('estadoid', this.seguimientoEditando.estadoid.toString());
      data.append('responsable', this.seguimientoEditando.responsable);
      data.append('fechafin', this.seguimientoEditando.fechafin.toString());
      data.append('pasosid', this.seguimientoEditando.pasosid.toString());
      data.append('proyectoid', this.seguimientoEditando.proyectoid.toString());

      // Estás editando un seguimiento existente
      this.seguimientoService.update(this.seguimientoEditando.id, this.seguimientoEditando).subscribe(
        (response) => {
          // La actualización se realizó con éxito
          this.obtenerSeguimientos();
          this.cerrarDialog();
          this.seguimientoEditando = null; // Reinicializa la variable de edición
        },
        (error) => {
          // Maneja errores de actualización, muestra un mensaje de error o realiza acciones adecuadas.
          console.error(error);
        }
      );
    } else {
      // Estás creando un nuevo seguimiento
      console.log("Creando")
      this.seguimientoService.create(this.nuevoSeguimiento).subscribe(
        (response) => {
          // El seguimiento se creó con éxito, puedes manejar aquí una redirección o una actualización de la lista de seguimientos.
          this.obtenerSeguimientos();
          this.cerrarDialog();
        },
        (error) => {
          // Maneja errores de creación, muestra un mensaje de error o realiza acciones adecuadas.
          console.error(error);
        }
      );
    }
  }

  editarSeguimiento(seguimiento: SeguimientosI) {
    // Asigna el seguimiento que se va a editar a la variable seguimientoEditando
    this.seguimientoEditando = { ...seguimiento };
    this.displayDialog = true;
    console.log("Datos del seguimiento a editar:", this.seguimientoEditando);
  }



  obtenerSeguimientos(): void {
    this.seguimientoService.getSeg()
      .subscribe({
        next: (data) => {
          this.seguimientos = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }

  obtenerDatos(): void {
    this.seguimientoService.getEstado().subscribe((data) => {
      this.estado = data;
    })
    this.seguimientoService.getPasos().subscribe((data) => {
      this.pasos = data;
    })
    this.seguimientoService.getProyectos().subscribe((data) => {
      this.proyecto = data;
    })
    this.seguimientoService.getTareaAnterior().subscribe((data) => {
      this.tareaAnterior = data;
    })
    this.seguimientoService.getTipoDependencia().subscribe((data) => {
      this.tipoDependencia = data;
    })
  }

  obtenerEstado(estadoid: number) {
    const estados = this.estado.find(r => r.id === estadoid);
    return estados ? `${estados.estado}` : 'Estado no encontrado'
  }
  obtenerPasos(pasosid: number) {
    const pasos = this.pasos.find(r => r.id === pasosid);
    return pasos ? `${pasos.nivel}` : 'Paso no encontrado'
  }

  obtenerProyectos(proyectoid: number) {
    const proyecto = this.proyecto.find(r => r.id === proyectoid);
    return proyecto ? `${proyecto.proyecto}` : 'Proyecto no encontrado'
  }
  obtenerTareaAnterior(tareaid: number) {
    const proyecto = this.tareaAnterior.find(r => r.id === tareaid);
    return proyecto ? `${proyecto.descripciontarea}` : 'No Aplica'
  }
  obtenerTipoDependencia(tipoDependenciaid: number) {
    const td = this.tipoDependencia.find(r => r.id === tipoDependenciaid);
    return td ? `${td.tipodependencia}` : 'No Aplica'
  }

  mostrarDialog() {
    console.log("creando")
    this.displayDialog = true;
  }

  // Método para cerrar el diálogo
  cerrarDialog() {
    this.displayDialog = false;
  }

  formatDate(date: Date): string {
    if (date instanceof Date) {
      const year = date.getFullYear();
      const month = (date.getMonth() + 1).toString().padStart(2, '0');
      const day = date.getDate().toString().padStart(2, '0');
      return `${year}-${month}-${day}`;
    }
    return '';
  }

}
