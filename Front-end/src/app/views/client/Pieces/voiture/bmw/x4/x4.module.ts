import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { X4RoutingModule } from './x4-routing.module';
import { X4Component } from './x4/x4.component';


@NgModule({
  declarations: [
    X4Component
  ],
  imports: [
    CommonModule,
    X4RoutingModule
  ]
})
export class X4Module { }
