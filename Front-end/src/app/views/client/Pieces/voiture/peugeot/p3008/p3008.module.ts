import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { P3008RoutingModule } from './p3008-routing.module';
import { P3008Component } from './p3008/p3008.component';


@NgModule({
  declarations: [
    P3008Component
  ],
  imports: [
    CommonModule,
    P3008RoutingModule
  ]
})
export class P3008Module { }
