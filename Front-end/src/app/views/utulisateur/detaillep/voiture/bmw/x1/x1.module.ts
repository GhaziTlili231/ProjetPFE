import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { X1RoutingModule } from './x1-routing.module';
import { X1Component } from './x1/x1.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    X1Component
  ],
  imports: [
    CommonModule,
    X1RoutingModule,
    FormsModule
  ]
})
export class X1Module { }
