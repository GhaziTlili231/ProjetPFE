import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Golf7RoutingModule } from './golf7-routing.module';
import { Golf7Component } from './golf7/golf7.component';


@NgModule({
  declarations: [
    Golf7Component
  ],
  imports: [
    CommonModule,
    Golf7RoutingModule
  ]
})
export class Golf7Module { }
