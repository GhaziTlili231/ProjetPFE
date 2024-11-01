import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PassatRoutingModule } from './passat-routing.module';
import { PassatComponent } from './passat/passat.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    PassatComponent
  ],
  imports: [
    CommonModule,
    PassatRoutingModule,
    FormsModule
  ]
})
export class PassatModule { }
