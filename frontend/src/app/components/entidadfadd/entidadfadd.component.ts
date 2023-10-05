import { Component, OnInit } from '@angular/core';
import { EntidadFinanciadoraI } from 'src/app/models/entidadf.model';
import { EntidadfService } from 'src/app/services/entidadf.service';

@Component({
  selector: 'app-entidadfadd',
  templateUrl: './entidadfadd.component.html',
  styleUrls: ['./entidadfadd.component.css']
})
export class EntidadfaddComponent implements OnInit {

entidadf: EntidadFinanciadoraI = {
  entidadfinanciadora: '',
};
submitted = false;

constructor (private entidadfservice: EntidadfService) {}
ngOnInit(): void {

}

saveEntidadf(): void {
  const data = {
    entidadfinanciadora: this.entidadf.entidadfinanciadora
  };

  this.entidadfservice.create(data)
    .subscribe({
      next: (res) => {
        console.log(res);
        this.submitted = true;
      },
      error: (e) => console.error(e)        
    })  
}

newEntidadf(): void {
  this.submitted = false;
  this.entidadf = {
    entidadfinanciadora: ''
  };
}


}
