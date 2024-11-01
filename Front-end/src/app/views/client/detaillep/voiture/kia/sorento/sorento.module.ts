import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SorentoRoutingModule } from './sorento-routing.module';
import { SorentoComponent } from './sorento/sorento.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    SorentoComponent
  ],
  imports: [
    CommonModule,
    SorentoRoutingModule,
    FormsModule
  ]
})
export class SorentoModule { }
