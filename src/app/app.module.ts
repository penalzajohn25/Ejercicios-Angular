import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { FechaactualComponent } from './fechaactual/fechaactual.component';
import { CopyrightComponent } from './copyright/copyright.component';
import { ViewModeloComponent } from './view-modelo/view-modelo.component';
import { EjmetodoComponent } from './ejmetodo/ejmetodo.component';
import { EjpropertybindingComponent } from './ejpropertybinding/ejpropertybinding.component';
import { EjemEventBindigComponent } from './ejem-event-bindig/ejem-event-bindig.component';
import { EjemTwoWayBindingComponent } from './ejem-two-way-binding/ejem-two-way-binding.component';
import { EjemDirectiveNgifComponent } from './ejem-directive-ngif/ejem-directive-ngif.component';
import { EjemDirectiveNgStyleComponent } from './ejem-directive-ng-style/ejem-directive-ng-style.component';
import { EjemDirectivaNgClassComponent } from './ejem-directiva-ng-class/ejem-directiva-ng-class.component';
import { EjemNgforComponent } from './ejem-ngfor/ejem-ngfor.component';
import { EjemNgforObjetosComponent } from './ejem-ngfor-objetos/ejem-ngfor-objetos.component';


@NgModule({
  declarations: [
    AppComponent,
    FechaactualComponent,
    CopyrightComponent,
    ViewModeloComponent,
    EjmetodoComponent,
    EjpropertybindingComponent,
    EjemEventBindigComponent,
    EjemTwoWayBindingComponent,
    EjemDirectiveNgifComponent,
    EjemDirectiveNgStyleComponent,
    EjemDirectivaNgClassComponent,
    EjemNgforComponent,
    EjemNgforObjetosComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
