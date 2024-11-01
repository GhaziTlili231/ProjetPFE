import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { I20RoutingModule } from './i20-routing.module';
import { I20Component } from './i20/i20.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    I20Component
  ],
  imports: [
    CommonModule,
    I20RoutingModule,
    FormsModule
  ]
})
export class I20Module { }
