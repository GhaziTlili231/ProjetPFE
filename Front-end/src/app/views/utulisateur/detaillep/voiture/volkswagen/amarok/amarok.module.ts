import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AmarokRoutingModule } from './amarok-routing.module';
import { AmarokComponent } from './amarok/amarok.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AmarokComponent
  ],
  imports: [
    CommonModule,
    AmarokRoutingModule,
    FormsModule
  ]
})
export class AmarokModule { }
