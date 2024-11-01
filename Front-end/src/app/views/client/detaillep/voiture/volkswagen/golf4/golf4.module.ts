import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Golf4RoutingModule } from './golf4-routing.module';
import { Golf4Component } from './golf4/golf4.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    Golf4Component
  ],
  imports: [
    CommonModule,
    Golf4RoutingModule,
    FormsModule
  ]
})
export class Golf4Module { }
