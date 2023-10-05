import { Component,OnInit } from '@angular/core';
import { TipoarchivoI } from 'src/app/models/tipoarchivo.model';
import { TipoarchivoService } from 'src/app/services/tipoarchivo.service';

@Component({
  selector: 'app-tipoarchivoadd',
  templateUrl: './tipoarchivoadd.component.html',
  styleUrls: ['./tipoarchivoadd.component.css']
})
export class TipoarchivoaddComponent implements OnInit {

  tiposarchivos: TipoarchivoI = {
    nombre_archivo: ''
  };
  submitted = false;
  
  constructor (private taService: TipoarchivoService) {}


  ngOnInit(): void {
    
  }

  saveTipoarchivo(): void {
    const data = {
      nombre_archivo: this.tiposarchivos.nombre_archivo
    };
  
    this.taService.create(data)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.submitted = true;
        },
        error: (e) => console.error(e)        
      })  
  }
  
  newTipoarchivo(): void {
    this.submitted = false;
    this.tiposarchivos = {
      nombre_archivo: ''
    };
  }

}
