import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  items: MenuItem[] | undefined;

  ngOnInit() {
      this.items = [
          {
              label: 'Proyectos',
              routerLink: ["/proyectos"],
              items: [
                {
                  label: 'Archivos',
                  routerLink: ["/archivos"],
                },
                {
                  label: 'Ver listado de Proyectos',
                }
              ] 
              
          },
          {
            label: 'Seguimientos',
            routerLink: ['/seguimientos']
          },
          {
              label: 'Usuarios',
              routerLink: ['/usuarios']
          },
          {
            label: 'Operador',
            routerLink: ['/operador'],
            items: [
              {
                label: 'Agregar Operador',
                routerLink: ["/operadoradd"],
              },
              {
                label: 'Ver listado de Operadores',
                routerLink: ["/operadorform"],
              }
            ]
          }
      ];
  }


  sidebarVisible = false;
}

