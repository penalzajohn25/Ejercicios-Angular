import { Component, OnInit } from '@angular/core';
import {alumno} from '../modelos/alumno.model';
@Component({
  selector: 'app-ejem-ngfor-objetos',
  templateUrl: './ejem-ngfor-objetos.component.html',
  styleUrls: ['./ejem-ngfor-objetos.component.css']
})
export class EjemNgforObjetosComponent implements OnInit {
   
  public alumnos:Array<alumno>=[
      {id:1,name:'juan',lastname:'torres',city:'madrid'},
      {id:2,name:'maria',lastname:'lopez',city:'barcelona'}
  ]

  constructor() { }

  ngOnInit() {
  }

}
