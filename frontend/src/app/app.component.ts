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
            routerLink: ['/operadorform'],
            items: [
              {
                label: 'Agregar Operador',
                routerLink: ["/operadoradd"],
              },
            ]
          },
          {
            label: 'Entidades Financiadoras',
            routerLink: ['/entidadfform'],
            items: [
              {
                label: 'Agregar Entidad Financiadora',
                routerLink: ["/entidadfadd"],
              },
            ]
          },
          {
            label: 'Roles de la Universidad',
            routerLink: ["/roluform"],
            items:[
              {
                label: 'Agregar Rol',
                routerLink: ["/roluadd"],
              }
            ]
          },
          {
            label: 'Tipos de Archivos',
            routerLink: ['/tipoarchivoform'],
            items: [
              {
                label: 'Agregar un tipo de archivo',
                routerLink: ["/tipoarchivoadd"],
              },
            ]
          },
          {
            label: 'Archivos',
            routerLink: ['/archivoform'],
            items: [
              {
                label: 'Agregar un archivo',
                routerLink: ["/archivoadd"],
              },
            ]
          },
      ];
  }


  sidebarVisible = false;
}

