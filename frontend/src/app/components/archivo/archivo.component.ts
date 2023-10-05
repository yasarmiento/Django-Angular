import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-archivo',
  templateUrl: './archivo.component.html',
  styleUrls: ['./archivo.component.css']
})
export class ArchivoComponent {
  archivos: any;

  constructor (private http: HttpClient) {}

  ngOnInit() {
    this.http.get("http://127.0.0.1:8000/archivos")
      .subscribe(
        pepito => {
          this.archivos = pepito;
        }
      );
  }
}
