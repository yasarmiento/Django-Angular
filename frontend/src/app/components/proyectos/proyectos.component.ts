import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProyectosService } from 'src/app/services/proyectos.service';
import { MessageService } from 'primeng/api';
import { ProyectosI } from 'src/app/models/proyectos.model';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})

export class ProyectosComponent {

  pro: any;
  editMode: boolean = false;
  proyect?: ProyectosI[];
  visible: boolean = false;
  convocatoriaNombre: any[] = [];
  rolU: any[] = [];
  operadorNombre: any[] = [];
  entidadFNombre: any[] = [];
  grupoINombre: any[] = [];

  currentIndex = -1;

  editingProyecto: ProyectosI = {
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

  editingIndex: number = -1;

  currentProyectosI: ProyectosI = {
    proyecto: '',
    codigo: '',
    plazo: 0,
    fechai: new Date(),
    fechaf: new Date(),
    convocatoriaid: '',
    roluniversidadid: '',
    operadorid: '',
    entidadfinanciadora: '',
    grupoinvestigacionid: '',
  };

  crearProyectosI: ProyectosI = {
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

  constructor(private proyectoService: ProyectosService, private http: HttpClient,
    private messageService: MessageService) { }

  ngOnInit() {
    this.retrieveProyectos();
    this.obtenerDatos();
  }

  retrieveProyectos(): void {
    this.proyectoService.getAll()
      .subscribe({
        next: (data) => {
          this.pro = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }

  refreshList(): void {
    this.retrieveProyectos();
    this.currentProyectosI = {
      proyecto: '',
      codigo: '',
      plazo: 0,
      fechai: new Date(),
      fechaf: new Date(),
      convocatoriaid: '',
      roluniversidadid: '',
      operadorid: '',
      entidadfinanciadora: '',
      grupoinvestigacionid: '',
    };
    this.currentIndex = -1;
  }

  setActiveProyecto(operadores: ProyectosI, index: number): void {
    this.currentProyectosI = operadores;
    this.currentIndex = index;
  }

  showDialog() {
    this.visible = true;
  }

  CerrarDialog() {
    this.visible = false;
  }

  crearProyecto(): void {
    if (this.editMode) {
      // Estás en modo de edición, por lo que actualiza el proyecto existente
      console.log("editando el proyecto ", this.editingProyecto)
      this.proyectoService.update(this.editingProyecto).subscribe(
        () => {
          this.messageService.add({ severity: 'success', summary: 'Éxito', detail: 'Proyecto actualizado con éxito' });
          this.refreshList();
          this.CerrarDialog();
        },
        (error) => {
          this.messageService.add({ severity: 'error', summary: 'Error', detail: 'No se pudo actualizar el proyecto' });
        }
      );
    } else {
      console.log("Creando un proyecto")
      this.proyectoService.create(this.crearProyectosI).subscribe(() => {
        this.messageService.add({ severity: 'success', summary: 'Éxito', detail: 'Proyecto creado con éxito' });
        this.refreshList();
        console.log("Proyecto creado con exito ")
        this.CerrarDialog();
      }, (error) => {
        this.messageService.add({ severity: 'error', summary: 'Error', detail: 'No se pudo crear el proyecto' });
      });

      this.editMode = false; // Restablecer el modo de edición
    }
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

  cancelEdit() {
    this.editingIndex = -1;
    this.CerrarDialog();
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

  // EDITAAAAR

  editProyecto(proyecto: ProyectosI, index: number) {
    this.editMode = true;
    this.editingProyecto = { ...proyecto }; // Clonar el proyecto para no modificar el original directamente
    this.editingIndex = index;
    this.visible = true; // Mostrar el diálogo de creación/edición
    console.log("Editando: ", this.editingProyecto)
  }

}