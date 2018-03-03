import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ejem-event-bindig',
  templateUrl: './ejem-event-bindig.component.html',
  styleUrls: ['./ejem-event-bindig.component.css']
})
export class EjemEventBindigComponent implements OnInit {
  texto:String;

  constructor() {
    this.texto="texto Original";
   }

   modificar_texto() {
    this.texto="Texto Modificado";
  }


  ngOnInit() {
  }

}
