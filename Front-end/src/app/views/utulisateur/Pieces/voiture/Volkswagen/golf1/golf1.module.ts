import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Golf1RoutingModule } from './golf1-routing.module';
import { Golf1Component } from './golf1/golf1.component';


@NgModule({
  declarations: [
    Golf1Component
  ],
  imports: [
    CommonModule,
    Golf1RoutingModule
  ]
})
export class Golf1Module { }
