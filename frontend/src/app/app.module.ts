import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProyectosComponent } from './components/proyectos/proyectos.component';
import { UsuariosComponent } from './components/usuarios/usuarios.component';
import { SeguimientosComponent } from './components/seguimientos/seguimientos.component';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { DropdownModule } from 'primeng/dropdown';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MenubarModule } from 'primeng/menubar';
import { SidebarModule } from 'primeng/sidebar'
import { CardModule } from 'primeng/card';
import { CheckboxModule } from 'primeng/checkbox';
import { RolUComponent } from './components/rol-u/rol-u.component';
import { OperadorComponent } from './components/operador/operador.component';
import { EntidadfinanciadoraComponent } from './components/entidadfinanciadora/entidadfinanciadora.component';
import { TipoarchivoComponent } from './components/tipoarchivo/tipoarchivo.component';
import { GrupoinvestigacionComponent } from './components/grupoinvestigacion/grupoinvestigacion.component';
import { ArchivoComponent } from './components/archivo/archivo.component';
import { ProyectosformComponent } from './components/proyectosform/proyectosform.component';



@NgModule({
  declarations: [
    AppComponent,
    ProyectosComponent,
    UsuariosComponent,
    SeguimientosComponent,
    RolUComponent,
    OperadorComponent,
    EntidadfinanciadoraComponent,
    TipoarchivoComponent,
    GrupoinvestigacionComponent,
    ArchivoComponent,
    ProyectosformComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    TableModule,
    ButtonModule,
    DropdownModule,
    BrowserAnimationsModule, 
    MenubarModule,
    SidebarModule,
    CardModule,
    CheckboxModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
