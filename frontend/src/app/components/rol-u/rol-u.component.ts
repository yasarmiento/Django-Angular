import { Component,Input, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { RoluService } from 'src/app/services/rolu.service';
import { RolUI } from 'src/app/models/rol-u.model';

@Component({
  selector: 'app-rol-u',
  templateUrl: './rol-u.component.html',
  styleUrls: ['./rol-u.component.css']
})
export class RolUComponent implements OnInit {

  @Input() viewMode = false;

  @Input() currentRolUI: RolUI = {
    rolU: ''
  }

  message = '';

  rolesU: any;

  constructor (
    private rolUService: RoluService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    if (!this.viewMode) {
      this.message = '';
      this.getRolU(this.route.snapshot.params["id"]);
    }
  }

  getRolU(id: string): void {
    this.rolUService.get(id)
      .subscribe({
        next: (data) => {
          this.currentRolUI = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }

  updateRolU(): void {
    this.message = '';

    this.rolUService.update(this.currentRolUI.id, this.currentRolUI)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.router.navigate(['/rolufform']);
        },
        error: (e) => console.error(e)
      });
  }

  deleteRolU(): void {
    this.rolUService.delete(this.currentRolUI.id)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.router.navigate(['/roluform']);
        },
        error: (e) => console.error(e)
      });
  }

}
