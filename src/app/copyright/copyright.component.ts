import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-copyright',
  templateUrl: './copyright.component.html',
  styleUrls: ['./copyright.component.css']
})
export class CopyrightComponent implements OnInit {
  hoy:any=new Date();
  copy:String='ACME S.A.';
  constructor() { }

  ngOnInit() {
  }

}
