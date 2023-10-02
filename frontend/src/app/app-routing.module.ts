import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProyectosComponent } from './components/proyectos/proyectos.component'
import { ProyectosformComponent } from './components/proyectosform/proyectosform.component'
import { SeguimientosComponent } from './components/seguimientos/seguimientos.component'
import { UsuariosComponent } from './components/usuarios/usuarios.component';
import { ArchivoComponent } from './components/archivo/archivo.component';
import { OperadorComponent } from './components/operador/operador.component';

const routes: Routes = [
  { path: '', redirectTo: 'proyectos', pathMatch: 'full' },
  { path: 'proyectos', component: ProyectosComponent },
  { path: 'proyectosform', component: ProyectosformComponent },
  { path: 'seguimientos', component: SeguimientosComponent },
  { path: 'usuarios', component: UsuariosComponent },
  { path: 'archivos', component: ArchivoComponent },
  { path: 'operador', component: OperadorComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
