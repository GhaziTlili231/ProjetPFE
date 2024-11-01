import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PassatRoutingModule } from './passat-routing.module';
import { PassatComponent } from './passat/passat.component';


@NgModule({
  declarations: [
    PassatComponent
  ],
  imports: [
    CommonModule,
    PassatRoutingModule
  ]
})
export class PassatModule { }
