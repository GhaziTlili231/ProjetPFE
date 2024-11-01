import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { P3008RoutingModule } from './p3008-routing.module';
import { P3008Component } from './p3008/p3008.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    P3008Component
  ],
  imports: [
    CommonModule,
    P3008RoutingModule,
    FormsModule
  ]
})
export class P3008Module { }
