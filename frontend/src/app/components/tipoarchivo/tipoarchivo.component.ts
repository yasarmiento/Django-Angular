import { Component, Input, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { TipoarchivoI } from 'src/app/models/tipoarchivo.model';
import { TipoarchivoService } from 'src/app/services/tipoarchivo.service';


@Component({
  selector: 'app-tipoarchivo',
  templateUrl: './tipoarchivo.component.html',
  styleUrls: ['./tipoarchivo.component.css']
})
export class TipoarchivoComponent implements OnInit {

  @Input() viewMode = false;

  @Input() currentTipoarchivoI: TipoarchivoI = {
    nombre_archivo: ''
  }

  message = '';

  archivos: any;

  constructor (
    private taService: TipoarchivoService,
    private route: ActivatedRoute,
    private router: Router
  ) {}


  ngOnInit(): void {
    if (!this.viewMode) {
      this.message = '';
      this.getTipoarchivo(this.route.snapshot.params["id"]);
    }
  }


  getTipoarchivo(id: string): void {
    this.taService.get(id)
      .subscribe({
        next: (data) => {
          this.currentTipoarchivoI = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }

  updateTipoarchivo(): void {
    this.message = '';

    this.taService.update(this.currentTipoarchivoI.id, this.currentTipoarchivoI)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.router.navigate(['/tipoarchivoform']);
        },
        error: (e) => console.error(e)
      });
  }

  deleteTipoarchivo(): void {
    this.taService.delete(this.currentTipoarchivoI.id)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.router.navigate(['/tipoarchivoform']);
        },
        error: (e) => console.error(e)
      });
  }

}
