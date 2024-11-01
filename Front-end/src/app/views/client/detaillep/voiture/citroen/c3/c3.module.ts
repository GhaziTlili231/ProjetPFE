import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { C3RoutingModule } from './c3-routing.module';
import { C3Component } from './c3/c3.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    C3Component
  ],
  imports: [
    CommonModule,
    C3RoutingModule,
    FormsModule
  ]
})
export class C3Module { }
