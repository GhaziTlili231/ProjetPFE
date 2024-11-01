import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { A4RoutingModule } from './a4-routing.module';
import { A4Component } from './a4/a4.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    A4Component
  ],
  imports: [
    CommonModule,
    A4RoutingModule,
    FormsModule
  ]
})
export class A4Module { }
