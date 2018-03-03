import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ejem-two-way-binding',
  templateUrl: './ejem-two-way-binding.component.html',
  styleUrls: ['./ejem-two-way-binding.component.css']
})
export class EjemTwoWayBindingComponent implements OnInit {
  texto:string;
  constructor() {
    this.texto="ejemplo two way";
   }

  ngOnInit() {
  }

}
