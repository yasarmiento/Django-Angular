import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent {
  usuarios: any;

  constructor (private http: HttpClient) {}

  ngOnInit() {
    this.http.get("http://127.0.0.1:8000/estudiantes")
      .subscribe(
        estudiantes => {
          this.usuarios = estudiantes;
        }
      );
  }

  
}
