import { Component, OnInit } from '@angular/core';
import { RolUI } from 'src/app/models/rol-u.model';
import { RoluService } from 'src/app/services/rolu.service';



@Component({
  selector: 'app-rol-uadd',
  templateUrl: './rol-uadd.component.html',
  styleUrls: ['./rol-uadd.component.css']
})
export class RolUaddComponent implements OnInit {

  roles: RolUI = {
    rolU: ''
  };
  submitted = false;
  
  constructor (private rolUService: RoluService) {}

  ngOnInit(): void {
    
  }

  saveRolU(): void {
    const data = {
      rolU: this.roles.rolU
    };
  
    this.rolUService.create(data)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.submitted = true;
        },
        error: (e) => console.error(e)        
      })  
  }
  
  newRolU(): void {
    this.submitted = false;
    this.roles = {
      rolU: ''
    };
  }
}
