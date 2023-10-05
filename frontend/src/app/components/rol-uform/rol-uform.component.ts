import { Component, OnInit } from '@angular/core';
import { RoluService } from 'src/app/services/rolu.service';
import { RolUI } from 'src/app/models/rol-u.model';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-rol-uform',
  templateUrl: './rol-uform.component.html',
  styleUrls: ['./rol-uform.component.css']
})
export class RolUformComponent implements OnInit{
  roles: any;

  rolU?: RolUI[];
  currentRolUI: RolUI = {
    rolU: ''
  }
  currentIndex = -1;

  constructor (private rolUService: RoluService, private http: HttpClient) {}


  ngOnInit(): void {
    this.retrieveRolesU();
    this.http.get("http://127.0.0.1:8000/roles_universidad")
      .subscribe(
        proyecto => {
          this.roles = proyecto;
        }
      );
  }

  retrieveRolesU(): void {
    this.rolUService.getAll()
      .subscribe({
        next: (data) => {
          this.rolU = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      })
  }

  refreshList(): void{
    this.retrieveRolesU();
    this.currentRolUI = {rolU: ''};
    this.currentIndex = -1;
  }

  setActiveRolesU(operadores: RolUI, index: number): void {
    this.currentRolUI = operadores;
    this.currentIndex = index;
  }

}
