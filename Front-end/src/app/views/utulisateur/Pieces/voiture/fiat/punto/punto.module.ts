import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PuntoRoutingModule } from './punto-routing.module';
import { PuntoComponent } from './punto/punto.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    PuntoComponent
  ],
  imports: [
    CommonModule,
    PuntoRoutingModule,
    FormsModule
  ]
})
export class PuntoModule { }
