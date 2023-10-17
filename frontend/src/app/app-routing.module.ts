import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProyectosComponent } from './components/proyectos/proyectos.component'
import { ProyectosformComponent } from './components/proyectosform/proyectosform.component'
import { ProyectosaddComponent } from './components/proyectosadd/proyectosadd.component'
import { SeguimientosComponent } from './components/seguimientos/seguimientos.component'
import { UsuariosComponent } from './components/usuarios/usuarios.component';
import { ArchivoComponent } from './components/archivo/archivo.component';
import { OperadorComponent } from './components/operador/operador.component';
import { OperadoraddComponent } from './components/operadoradd/operadoradd.component';
import { OperadorformComponent } from './components/operadorform/operadorform.component';
import { EntidadfaddComponent } from './components/entidadfadd/entidadfadd.component';
import { EntidadfformComponent } from './components/entidadfform/entidadfform.component';
import { EntidadfinanciadoraComponent } from './components/entidadfinanciadora/entidadfinanciadora.component';
import { RolUComponent } from './components/rol-u/rol-u.component';
import { RolUaddComponent } from './components/rol-uadd/rol-uadd.component';
import { RolUformComponent } from './components/rol-uform/rol-uform.component';
import { TipoarchivoComponent } from './components/tipoarchivo/tipoarchivo.component';
import { TipoarchivoformComponent } from './components/tipoarchivoform/tipoarchivoform.component';
import { TipoarchivoaddComponent } from './components/tipoarchivoadd/tipoarchivoadd.component';
import { ArchivoaddComponent } from './components/archivoadd/archivoadd.component';
import { ArchivoformComponent } from './components/archivoform/ArchivoformComponent';



const routes: Routes = [
  { path: '', redirectTo: 'proyectos', pathMatch: 'full' },
  { path: 'proyectos', component: ProyectosComponent },
  { path: 'proyectosform/:id', component: ProyectosformComponent },
  { path: 'proyectosadd', component: ProyectosaddComponent },
  { path: 'seguimientos', component: SeguimientosComponent },
  { path: 'usuarios', component: UsuariosComponent },
  { path: 'archivos/:id', component: ArchivoComponent },
  { path: 'operadores/:id', component: OperadorComponent },
  { path: 'operadoradd', component: OperadoraddComponent },
  { path: 'operadorform', component: OperadorformComponent },
  { path: 'entidadf/:id', component: EntidadfinanciadoraComponent },
  { path: 'entidadfadd', component: EntidadfaddComponent },
  { path: 'entidadfform', component: EntidadfformComponent },
  { path: 'rolu/:id', component: RolUComponent},
  { path: 'roluform', component: RolUformComponent},
  { path: 'roluadd', component: RolUaddComponent},
  { path: 'tipoarchivoform', component: TipoarchivoformComponent},
  { path: 'tipoarchivo/:id', component: TipoarchivoComponent},
  { path: 'tipoarchivoadd', component: TipoarchivoaddComponent},
  { path: 'archivoform', component: ArchivoformComponent},
  { path: 'archivoadd', component: ArchivoaddComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
