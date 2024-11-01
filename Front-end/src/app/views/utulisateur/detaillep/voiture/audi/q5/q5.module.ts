import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Q5RoutingModule } from './q5-routing.module';
import { Q5Component } from './q5.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    Q5Component
  ],
  imports: [
    CommonModule,
    Q5RoutingModule,
    FormsModule
  ]
})
export class Q5Module { }
