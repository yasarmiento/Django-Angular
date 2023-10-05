import { Component, Input, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { EntidadfService } from 'src/app/services/entidadf.service';
import { EntidadFinanciadoraI } from 'src/app/models/entidadf.model';


@Component({
  selector: 'app-entidadfinanciadora',
  templateUrl: './entidadfinanciadora.component.html',
  styleUrls: ['./entidadfinanciadora.component.css']
})
export class EntidadfinanciadoraComponent implements OnInit {

  @Input() viewMode = false;

  @Input() currentEntidadFI: EntidadFinanciadoraI = {
    entidadfinanciadora: ''
  };

  message = '';

  entidades: any;

  constructor (
    private entidadfService: EntidadfService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    if (!this.viewMode) {
      this.message = '';
      this.getEntidadf(this.route.snapshot.params["id"]);
    }
  }

  getEntidadf(id: string): void {
    this.entidadfService.get(id)
      .subscribe({
        next: (data) => {
          this.currentEntidadFI = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }

  updateEntidadf(): void {
    this.message = '';

    this.entidadfService.update(this.currentEntidadFI.id, this.currentEntidadFI)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.router.navigate(['/entidadfform']);
        },
        error: (e) => console.error(e)
      });
  }

  deleteEntidadf(): void {
    this.entidadfService.delete(this.currentEntidadFI.id)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.router.navigate(['/entidadfform']);
        },
        error: (e) => console.error(e)
      });
  }
}
