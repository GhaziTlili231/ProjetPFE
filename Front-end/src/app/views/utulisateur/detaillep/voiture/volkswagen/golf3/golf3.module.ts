import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Golf3RoutingModule } from './golf3-routing.module';
import { Golf3Component } from './golf3/golf3.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    Golf3Component
  ],
  imports: [
    CommonModule,
    Golf3RoutingModule,
    FormsModule
  ]
})
export class Golf3Module { }
