import { Component, OnInit } from '@angular/core';
import {alumno} from '../modelos/alumno.model';
@Component({
  selector: 'app-view-modelo',
  templateUrl: './view-modelo.component.html',
  styleUrls: ['./view-modelo.component.css']
})
export class ViewModeloComponent implements OnInit {
        alumno1=new alumno(1,'Juan','Peñaloza','Maracay');
  

  constructor() { }

  ngOnInit() {
  }

}
