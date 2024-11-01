import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { X3RoutingModule } from './x3-routing.module';
import { X3Component } from './x3/x3.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    X3Component
  ],
  imports: [
    CommonModule,
    X3RoutingModule,
    FormsModule
  ]
})
export class X3Module { }
