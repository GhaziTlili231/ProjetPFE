import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Mt03RoutingModule } from './mt03-routing.module';
import { Mt03Component } from './mt03/mt03.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    Mt03Component
  ],
  imports: [
    CommonModule,
    Mt03RoutingModule,
    FormsModule
  ]
})
export class Mt03Module { }
