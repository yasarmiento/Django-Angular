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
import { ProyectosaddComponent } from './components/proyectosadd/proyectosadd.component';
import { OperadoraddComponent } from './components/operadoradd/operadoradd.component';
import { OperadorformComponent } from './components/operadorform/operadorform.component';
import { UsuariosformComponent } from './components/usuariosform/usuariosform.component';
import { UsuariosaddComponent } from './components/usuariosadd/usuariosadd.component';
import { EntidadfaddComponent } from './components/entidadfadd/entidadfadd.component';
import { EntidadfformComponent } from './components/entidadfform/entidadfform.component';
import { RolUaddComponent } from './components/rol-uadd/rol-uadd.component';
import { RolUformComponent } from './components/rol-uform/rol-uform.component';
import { TipoarchivoaddComponent } from './components/tipoarchivoadd/tipoarchivoadd.component';
import { TipoarchivoformComponent } from './components/tipoarchivoform/tipoarchivoform.component';
import { ArchivoaddComponent } from './components/archivoadd/archivoadd.component';
import { ArchivoformComponent } from './components/archivoform/ArchivoformComponent';
import { FileUploadModule } from 'primeng/fileupload'
import { ToastModule } from 'primeng/toast'
import { MessageService } from 'primeng/api';
import { DialogModule } from 'primeng/dialog';
import { SeguimientosformComponent } from './components/seguimientosform/seguimientosform.component';

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
    ProyectosaddComponent,
    OperadoraddComponent,
    OperadorformComponent,
    UsuariosformComponent,
    UsuariosaddComponent,
    EntidadfaddComponent,
    EntidadfformComponent,
    RolUaddComponent,
    RolUformComponent,
    TipoarchivoaddComponent,
    TipoarchivoformComponent,
    ArchivoaddComponent,
    ArchivoformComponent,
    SeguimientosformComponent,
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
    FileUploadModule,
    ToastModule,
    DialogModule,
  ],
  providers: [MessageService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
