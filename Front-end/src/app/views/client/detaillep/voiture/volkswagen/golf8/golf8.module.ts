import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Golf8RoutingModule } from './golf8-routing.module';
import { Golf8Component } from './golf8/golf8.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    Golf8Component
  ],
  imports: [
    CommonModule,
    Golf8RoutingModule,
    FormsModule
  ]
})
export class Golf8Module { }
