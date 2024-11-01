import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AmarokRoutingModule } from './amarok-routing.module';
import { AmarokComponent } from './amarok/amarok.component';


@NgModule({
  declarations: [
    AmarokComponent
  ],
  imports: [
    CommonModule,
    AmarokRoutingModule
  ]
})
export class AmarokModule { }
