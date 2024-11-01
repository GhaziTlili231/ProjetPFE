import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { F500RoutingModule } from './f500-routing.module';
import { F500Component } from './f500/f500.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    F500Component
  ],
  imports: [
    CommonModule,
    F500RoutingModule,
    FormsModule
  ]
})
export class F500Module { }
