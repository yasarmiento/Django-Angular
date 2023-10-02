import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})

export class ProyectosComponent {
  proyectos: any;

  constructor (private http: HttpClient) {}

  ngOnInit() {
    this.http.get("http://127.0.0.1:8000/")
      .subscribe(
        proyecto => {
          this.proyectos = proyecto;
        }
      );
  }
}