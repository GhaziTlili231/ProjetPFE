import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PeugeotRoutingModule } from './peugeot-routing.module';
import { PeugeotComponent } from './peugeot/peugeot.component';


@NgModule({
  declarations: [
    PeugeotComponent
  ],
  imports: [
    CommonModule,
    PeugeotRoutingModule
  ]
})
export class PeugeotModule { }
