import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { P408RoutingModule } from './p408-routing.module';
import { P408Component } from './p408/p408.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    P408Component
  ],
  imports: [
    CommonModule,
    P408RoutingModule,
    FormsModule
  ]
})
export class P408Module { }
