import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { X5RoutingModule } from './x5-routing.module';
import { X5Component } from './x5/x5.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    X5Component
  ],
  imports: [
    CommonModule,
    X5RoutingModule,
    FormsModule
  ]
})
export class X5Module { }
