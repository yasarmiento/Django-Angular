import { NgModule } from '@angular/core';
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

const routes: Routes = [
  { path: '', redirectTo: 'proyectos', pathMatch: 'full' },
  { path: 'proyectos', component: ProyectosComponent },
  { path: 'proyectosform/:id', component: ProyectosformComponent },
  { path: 'proyectosadd', component: ProyectosaddComponent },
  { path: 'seguimientos', component: SeguimientosComponent },
  { path: 'usuarios', component: UsuariosComponent },
  { path: 'archivos', component: ArchivoComponent },
  { path: 'operadores/:id', component: OperadorComponent },
  { path: 'operadoradd', component: OperadoraddComponent },
  { path: 'operadorform', component: OperadorformComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
