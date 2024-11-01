import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Golf5RoutingModule } from './golf5-routing.module';
import { Golf5Component } from './golf5/golf5.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    Golf5Component
  ],
  imports: [
    CommonModule,
    Golf5RoutingModule,
    FormsModule
  ]
})
export class Golf5Module { }
