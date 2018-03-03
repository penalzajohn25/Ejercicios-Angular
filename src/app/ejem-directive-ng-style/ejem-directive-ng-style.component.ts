import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ejem-directive-ng-style',
  templateUrl: './ejem-directive-ng-style.component.html',
  styleUrls: ['./ejem-directive-ng-style.component.css']
})
export class EjemDirectiveNgStyleComponent implements OnInit {
   
  calificacion:number;

  constructor() { }

  setColor(){
   return (this.calificacion==5)?'green':'red';
  }

  ngOnInit() {
  }

}
