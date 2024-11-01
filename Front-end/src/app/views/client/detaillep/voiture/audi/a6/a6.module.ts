import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { A6RoutingModule } from './a6-routing.module';
import { A6Component } from './a6/a6.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    A6Component
  ],
  imports: [
    CommonModule,
    A6RoutingModule,
    FormsModule
  ]
})
export class A6Module { }
