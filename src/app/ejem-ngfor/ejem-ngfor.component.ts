import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ejem-ngfor',
  templateUrl: './ejem-ngfor.component.html',
  styleUrls: ['./ejem-ngfor.component.css']
})
export class EjemNgforComponent implements OnInit {

  cursos:string[];

  constructor() { 
    this.cursos=['HTML','XML','Angular'];
  }

  ngOnInit() {
  }

}
