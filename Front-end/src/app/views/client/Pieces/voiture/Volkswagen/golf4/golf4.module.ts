import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Golf4RoutingModule } from './golf4-routing.module';
import { Golf4Component } from './golf4/golf4.component';


@NgModule({
  declarations: [
    Golf4Component
  ],
  imports: [
    CommonModule,
    Golf4RoutingModule
  ]
})
export class Golf4Module { }
