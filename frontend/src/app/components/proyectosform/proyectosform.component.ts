import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Convocatoria } from '../../models/proyectos.model'

@Component({
  selector: 'app-proyectosform',
  templateUrl: './proyectosform.component.html',
  styleUrls: ['./proyectosform.component.css']
})
export class ProyectosformComponent {

  proyectos: any;
  convocatorias: any[] = []; // Variable para almacenar las opciones de Convocatoria (ejemplo)

  constructor (private http: HttpClient) {}

  ngOnInit() {
    // Cargar datos de Convocatoria desde tu API Django
    this.http.get<Convocatoria[]>('http://127.0.0.1:8000/convocatorias').subscribe(
      (data) => {
        this.convocatorias = data;
      },
      (error) => {
        console.error('Error al cargar las convocatorias', error);
      }
    );
  }

  onSubmit() {
    this.http.post('http://127.0.0.1:8000/', this.proyectos).subscribe(
      (response) => {
        // Manejar la respuesta del servidor si es necesario
        console.log('Datos agregados con éxito', response);
      },
      (error) => {
        // Manejar errores si es necesario
        console.error('Error al agregar datos', error);
      }
    );
  }
}
