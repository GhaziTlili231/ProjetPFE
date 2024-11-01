import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { X2RoutingModule } from './x2-routing.module';
import { X2Component } from './x2/x2.component';


@NgModule({
  declarations: [
    X2Component
  ],
  imports: [
    CommonModule,
    X2RoutingModule
  ]
})
export class X2Module { }
