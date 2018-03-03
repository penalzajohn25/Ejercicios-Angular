import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ejem-directive-ngif',
  templateUrl: './ejem-directive-ngif.component.html',
  styleUrls: ['./ejem-directive-ngif.component.css']
})
export class EjemDirectiveNgifComponent implements OnInit {
  
   response:string="";
   escaneando:string="Escaneando";
  constructor() { 
    setTimeout(()=>{
      this.escaneando='Respuesta Correcta';
    },8000);
  }

  ngOnInit() {
  }

  setResponse(){
    let value_response = (this.response==="Caracas")?true:false;
    return value_response;
  }

  Restart(){
    this.response = "";
  }

}
