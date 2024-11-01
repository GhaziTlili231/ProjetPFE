import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Clio3RoutingModule } from './clio3-routing.module';
import { Clio3Component } from './clio3/clio3.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    Clio3Component
  ],
  imports: [
    CommonModule,
    Clio3RoutingModule,
    FormsModule
  ]
})
export class Clio3Module { }
