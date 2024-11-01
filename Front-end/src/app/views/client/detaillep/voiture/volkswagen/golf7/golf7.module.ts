import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Golf7RoutingModule } from './golf7-routing.module';
import { Golf7Component } from './golf7/golf7.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    Golf7Component
  ],
  imports: [
    CommonModule,
    Golf7RoutingModule,
    FormsModule
  ]
})
export class Golf7Module { }
