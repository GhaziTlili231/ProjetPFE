import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Golf5RoutingModule } from './golf5-routing.module';
import { Golf5Component } from './golf5/golf5.component';


@NgModule({
  declarations: [
    Golf5Component
  ],
  imports: [
    CommonModule,
    Golf5RoutingModule
  ]
})
export class Golf5Module { }
