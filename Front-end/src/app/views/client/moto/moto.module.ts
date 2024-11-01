import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MotoRoutingModule } from './moto-routing.module';
import { MotoComponent } from './moto/moto.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    MotoComponent
  ],
  imports: [
    CommonModule,
    MotoRoutingModule,
    FormsModule
  ]
})
export class MotoModule { }
