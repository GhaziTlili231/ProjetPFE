import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { A3RoutingModule } from './a3-routing.module';
import { A3Component } from './a3/a3.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    A3Component
  ],
  imports: [
    CommonModule,
    A3RoutingModule,
    FormsModule
  ]
})
export class A3Module { }
