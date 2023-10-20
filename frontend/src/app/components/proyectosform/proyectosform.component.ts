import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProyectosService } from 'src/app/services/proyectos.service';
import { ProyectosI } from '../../models/proyectos.model';
import { SeguimientosI } from 'src/app/models/seguimientos.models';
import { SeguimientosService } from 'src/app/services/seguimientos.service';
import { MessageService } from 'primeng/api';
import { ArchivoService } from 'src/app/services/archivo.service';
import { ArchivoI } from 'src/app/models/archivo.model';


@Component({
  selector: 'app-proyectosform',
  templateUrl: './proyectosform.component.html',
  styleUrls: ['./proyectosform.component.css']
})
export class ProyectosformComponent implements OnInit {

  seguimientos: SeguimientosI[] = [];


  seguimientosProyecto: SeguimientosI[] = [];

  seguimientoEditando: SeguimientosI | null = null;

  displayDialog = false;

  archivos: ArchivoI[] = [];
  archivosProyectos: ArchivoI[] = [];

  convocatoriaNombre: any[] = [];
  rolU: any[] = [];
  operadorNombre: any[] = [];
  entidadFNombre: any[] = [];
  grupoINombre: any[] = [];
  estado: any[] = [];
  pasos: any[] = [];
  proyecto: any[] = [];
  tareaAnterior: any[] = [];
  tipoDependencia: any[] = [];
  nombresArchivos: any[] = [];
  proyectos: any[] = [];

  visible: boolean = false;

  editingIndex: number = -1;

  proyectosform: ProyectosI | undefined;

  editMode: boolean = false;

  proyectoOriginal: ProyectosI = {
    proyecto: '',
    codigo: '',
    plazo: 0,
    fechai: new Date(),
    fechaf: new Date(),
    convocatoriaid: null,
    roluniversidadid: null,
    operadorid: null,
    entidadfinanciadora: '',
    grupoinvestigacionid: '',
  };

  proyectoEditado: ProyectosI = {
    proyecto: '',
    codigo: '',
    plazo: 0,
    fechai: new Date(),
    fechaf: new Date(),
    convocatoriaid: null,
    roluniversidadid: null,
    operadorid: null,
    entidadfinanciadora: '',
    grupoinvestigacionid: '',
  };

  nuevoSeguimiento: SeguimientosI = {
    descripciontarea: '',
    duracion: 0,
    tarea_anterior: null,
    diasdependencia: 0,
    tipodependenciaid: null,
    inicio: new Date(),
    estadoid: null,
    responsable: '',
    fechafin: new Date(),
    pasosid: null,
    proyectoid: null,
  };

  archivosProyecto: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private proyectoService: ProyectosService,
    private seguimientoService: SeguimientosService,
    private messageService: MessageService,
    private archivoService: ArchivoService) { }

  ngOnInit() {
    this.obtenerDatos();
    this.obtenerSeguimientos();
    this.obtenerArchivos();
    this.route.params.subscribe(params => {
      const proyectoId = +params['id']; // Obtiene el ID del proyecto desde la URL
      this.proyectoService.get(proyectoId) // Crea un método en tu servicio para cargar detalles del proyecto por ID
        .subscribe(proyecto => {
          this.proyectosform = proyecto;
          this.seguimientosProyecto = this.seguimientos.filter(seguimiento => seguimiento.proyectoid === proyectoId);
          this.archivosProyectos = this.archivos.filter(archivos => archivos.proyectoid === proyectoId)
        });
    });
  }

  refreshList(): void {
    this.obtenerSeguimientos();
    this.nuevoSeguimiento = {
      descripciontarea: '',
      duracion: 0,
      tarea_anterior: null,
      diasdependencia: 0,
      tipodependenciaid: null,
      inicio: new Date(),
      estadoid: null,
      responsable: '',
      fechafin: new Date(),
      pasosid: null,
      proyectoid: null,
    };

    this.editingIndex = -1;
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

  obtenerSeguimientoss(): void {
    this.route.params.subscribe(params => {
      const proyectoId = +params['id']; // Obtiene el ID del proyecto desde la URL

      this.seguimientoService.getSeg() // Crea un método en tu servicio para cargar seguimientos por proyecto
        .subscribe({
          next: (data) => {
            this.seguimientos = data;
            console.log(data);
          },
          error: (e) => console.error(e)
        });
    });
  }


  obtenerArchivos(): void {
    this.archivoService.getAarchivos()
      .subscribe({
        next: (data) => {
          this.archivos = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      })
  }

  CerrarDialog() {
    this.visible = false;
  }

  // Guarda los cambios realizados en la edición
  guardarCambios() {
    this.proyectoService.update(this.proyectoEditado).subscribe(
      (proyectoActualizado) => {
        // Proyecto actualizado con éxito, puedes manejar aquí cualquier lógica adicional necesaria
        console.log('Proyecto actualizado con éxito', proyectoActualizado);
        this.messageService.add({ severity: 'success', summary: 'Actualizado', detail: 'Proyecto actualizado con exito' });
        this.visible = false; // Desactivar el modo de edición
        // Recargar la página después de un breve retraso para que los cambios se reflejen
        setTimeout(() => {
          location.reload();
        }, 500); // Espera 1 segundo antes de recargar la página
      },
      (error) => {
        // Maneja errores de actualización aquí
        console.error('Error al actualizar el proyecto', error);
        this.messageService.add({ severity: 'danger', summary: 'Error', detail: 'Error al actualizar el proyecto' });

        // También puedes mostrar un mensaje de error al usuario si es necesario
      }
    );
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
      data.append('estadoid', this.seguimientoEditando.estadoid);
      data.append('responsable', this.seguimientoEditando.responsable);
      data.append('fechafin', this.seguimientoEditando.fechafin.toString());
      data.append('pasosid', this.seguimientoEditando.pasosid);
      data.append('proyectoid', this.seguimientoEditando.proyectoid);
      // Estás editando un seguimiento existente
      this.seguimientoService.update(this.seguimientoEditando.id, this.seguimientoEditando).subscribe(
        (response) => {
          // La actualización se realizó con éxito
          this.cerrarDialog();
          this.obtenerSeguimientos();
        },
        (error) => {
          // Maneja errores de actualización, muestra un mensaje de error o realiza acciones adecuadas.
          console.error(error);
        }
      );

    } else {// Estás creando un nuevo seguimiento
      if (this.proyectosform) {
        this.nuevoSeguimiento.proyectoid = this.proyectosform.id; // Asigna el ID del proyecto desde la URL
        console.log("Creando", this.nuevoSeguimiento);

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
      } else {
        console.error("proyectosform es undefined. Asegúrate de que se haya inicializado correctamente.");
      }
    }
    this.seguimientoEditando = null; // Reinicializa la variable de edición
    setTimeout(() => {
      location.reload();
    }, 500); // Espera 1/2 seguNdo antes de recargar la página
  }

  editarSeguimiento(seguimiento: SeguimientosI) {
    // Asigna el seguimiento que se va a editar a la variable seguimientoEditando
    this.seguimientoEditando = { ...seguimiento };
    this.displayDialog = true;
    console.log("Datos del seguimiento a editar:", this.seguimientoEditando);
  }


  archivoVisible() {
    this.archivosProyecto = true;
  }

  editProyecto(proyecto: ProyectosI) {
    this.proyectoEditado = { ...proyecto }; // Clonar el proyecto para no modificar el original directamen
    this.visible = true; // Mostrar el diálogo de creación/edición
    console.log("Editando: ", this.proyectoEditado)
  }

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

  getFileName(url: string): string {
    if (url) {
      const parts = url.split('/');
      return parts[parts.length - 1];
    }
    return '';
  }

  mostrarDialog() {
    this.displayDialog = true;
  }

  obtenerDatos(): void {
    this.proyectoService.getConvocatoria().subscribe((data) => {
      this.convocatoriaNombre = data;
    });

    this.proyectoService.getRolU().subscribe((data) => {
      this.rolU = data;

    });
    this.proyectoService.getOperador().subscribe((data) => {
      this.operadorNombre = data;
    });

    this.proyectoService.getEntidadF().subscribe((data) => {
      this.entidadFNombre = data;
    });
    this.proyectoService.getGrupoInvestigacion().subscribe((data) => {
      this.grupoINombre = data;
    });
    this.seguimientoService.getEstado().subscribe((data) => {
      this.estado = data;
    })
    this.seguimientoService.getPasos().subscribe((data) => {
      this.pasos = data;
    })
    this.seguimientoService.getTareaAnterior().subscribe((data) => {
      this.tareaAnterior = data;
    })
    this.seguimientoService.getTipoDependencia().subscribe((data) => {
      this.tipoDependencia = data;
    })
    this.archivoService.getNombresArchivos().subscribe((data) => {
      this.nombresArchivos = data;
      console.log("tipos de archivos: ", this.nombresArchivos)
    });

  }

  obtenerNombresArchivos(archivoId: number) {
    const archivo = this.nombresArchivos.find(r => r.id === archivoId);
    return archivo ? `${archivo.nombre_archivo}` : 'archivo no encontrado'
  }

  //obtener los nombres desde las tablas tipo

  obtenerConvocatoriaNombre(convocatoriaId: number) {
    const convocatoria = this.convocatoriaNombre.find(r => r.id === convocatoriaId);
    return convocatoria ? `${convocatoria.convocatoria}` : 'convocatoria no encontrada'
  }

  obtenerRolU(rolUId: number) {
    const roles = this.rolU.find(r => r.id === rolUId);
    return roles ? `${roles.rolU}` : 'rol no encontrado'
  }
  obtenerOperadorNombre(operadorID: number) {
    const operador = this.operadorNombre.find(r => r.id === operadorID);
    return operador ? `${operador.operador}` : 'operador no encontrado'
  }

  obtenerEntidadF(entidadFId: number) {
    const entidadf = this.entidadFNombre.find(r => r.id === entidadFId);
    return entidadf ? `${entidadf.entidadfinanciadora}` : 'entidad financiadora no encontrada'
  }
  obtenerGrupoI(gurupoId: number) {
    const grupoI = this.grupoINombre.find(r => r.id === gurupoId);
    return grupoI ? `${grupoI.grupoinvestigacion}` : 'grupo de investigacion no encontrado'
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
    // Filtra las tareas anteriores por el proyecto ID
    const tareaa = this.tareaAnterior.find(r => r.id === tareaid);
    return tareaa ? `${tareaa.descripciontarea}` : 'No Aplica';

  }
  obtenerTipoDependencia(tipoDependenciaid: number) {
    const td = this.tipoDependencia.find(r => r.id === tipoDependenciaid);
    return td ? `${td.tipodependencia}` : 'No Aplica'
  }

}
