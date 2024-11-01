import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Golf6RoutingModule } from './golf6-routing.module';
import { Golf6Component } from './golf6/golf6.component';


@NgModule({
  declarations: [
    Golf6Component
  ],
  imports: [
    CommonModule,
    Golf6RoutingModule
  ]
})
export class Golf6Module { }
