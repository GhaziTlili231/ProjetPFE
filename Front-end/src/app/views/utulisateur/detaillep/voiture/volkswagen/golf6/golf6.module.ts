import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Golf6RoutingModule } from './golf6-routing.module';
import { Golf6Component } from './golf6/golf6.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    Golf6Component
  ],
  imports: [
    CommonModule,
    Golf6RoutingModule,
    FormsModule
  ]
})
export class Golf6Module { }
