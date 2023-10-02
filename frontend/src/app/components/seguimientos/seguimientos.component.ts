import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-seguimientos',
  templateUrl: './seguimientos.component.html',
  styleUrls: ['./seguimientos.component.css']
})
export class SeguimientosComponent {
  seguimientos: any;

  constructor (private http: HttpClient) {}

  ngOnInit() {
    this.http.get("http://127.0.0.1:8000/seguimientos")
      .subscribe(
        seguimientos => {
          this.seguimientos = seguimientos;
        }
      );
  }
}
