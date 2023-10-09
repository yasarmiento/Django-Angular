import { Component, Input, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ArchivoI } from 'src/app/models/archivo.model';
import { ArchivoService } from 'src/app/services/archivo.service';

@Component({
  selector: 'app-archivo',
  templateUrl: './archivo.component.html',
  styleUrls: ['./archivo.component.css']
})
export class ArchivoComponent implements OnInit{

  @Input() viewMode = false;

  @Input() currentArchivoI: ArchivoI = {
    archivo: '',
    nombre_archivo_id: '',
    proyectoid: ''
  }

  message = '';

  archivos: any;
  proyecto: any;
  nombresArchivos: any;


  constructor (
    private archivoService: ArchivoService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    if (!this.viewMode) {
      this.message = '';
      this.getArchivo(this.route.snapshot.params["id"]);

      this.archivoService.getNombresArchivos().subscribe(data => {
        this.nombresArchivos = data;
      });
  
      this.archivoService.getProyectos().subscribe(data => {
        this.proyecto = data;
      });
    }
  }

  getArchivo(id: string): void {
    this.archivoService.get(id)
      .subscribe({
        next: (data) => {
          this.currentArchivoI = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }

  updateArchivo(): void {
    this.message = '';
    this.archivoService.update(this.currentArchivoI.id, this.currentArchivoI)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.router.navigate(['/archivoform']);
        },
        error: (e) => console.error(e)
      });
  }

  deleteArchivo(): void {
    this.archivoService.delete(this.currentArchivoI.id)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.router.navigate(['/archivoform']);
        },
        error: (e) => console.error(e)
      });
  }
}
