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
    this.http.get("http://127.0.0.1:8000/proyectos")
      .subscribe(
        proyecto => {
          this.pro = proyecto;
        }
      );
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
    console.log("Creando un proyecto")
    this.visible = true;
  }

  CerrarDialog() {
    this.visible = false;
  }

  crearProyecto(): void {
    if (this.editMode && this.editingProyecto != null) {
      const data = new FormData();
      console.log(this.editingProyecto)
      data.append('proyecto', this.editingProyecto.proyecto);
      data.append('codigo', this.editingProyecto.codigo);
      data.append('plazo', this.editingProyecto.plazo.toString());
      const formattedFechaI = this.formatDate(this.editingProyecto.fechai);
      data.append('fechai', formattedFechaI);
      const formattedFechaF = this.formatDate(this.editingProyecto.fechaf);
      data.append('fechaf', formattedFechaF);
      data.append('convocatoriaid', this.editingProyecto.convocatoriaid.toString());
      data.append('roluniversidadid', this.editingProyecto.roluniversidadid.toString());
      data.append('operadorid', this.editingProyecto.operadorid.toString());
      data.append('entidadfinanciadora', this.editingProyecto.entidadfinanciadora);
      data.append('grupoinvestigacionid', this.editingProyecto.grupoinvestigacionid.toString());

      console.log("datos para editar: ", data)
      
      this.proyectoService.update(this.editingProyecto.id, data).subscribe(() => {
        console.log("Proyecto editado con exito ")
        this.messageService.add({ severity: 'success', summary: 'Éxito', detail: 'Proyecto editado con éxito' });
        this.refreshList();
        this.CerrarDialog();
      }, (error) => {
        this.messageService.add({ severity: 'error', summary: 'Error', detail: 'No se pudo editar el proyecto' });
      });

    } else {
      // Modo de creación (tu código existente)
      console.log("Creando un proyecto")
      this.proyectoService.create(this.crearProyectosI).subscribe(() => {
        this.messageService.add({ severity: 'success', summary: 'Éxito', detail: 'Proyecto creado con éxito' });
        this.refreshList();
        console.log("Proyecto creado con exito ")
        this.CerrarDialog();
      }, (error) => {
        this.messageService.add({ severity: 'error', summary: 'Error', detail: 'No se pudo crear el proyecto' });
      });
    }
    this.editMode = false; // Restablecer el modo de edición
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