import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { X1RoutingModule } from './x1-routing.module';
import { X1Component } from './x1/x1.component';


@NgModule({
  declarations: [
    X1Component
  ],
  imports: [
    CommonModule,
    X1RoutingModule
  ]
})
export class X1Module { }
