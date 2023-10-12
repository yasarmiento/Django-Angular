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

  constructor(private seguimientoService: SeguimientosService, private http: HttpClient,
    private messageService: MessageService) { }

  ngOnInit() {
    this.http.get("http://127.0.0.1:8000/seguimientos")
      .subscribe(
        seguimientos => {
          this.seguimientos = seguimientos;
        }
      );
    this.obtenerDatos();
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

}
