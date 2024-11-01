import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { C5RoutingModule } from './c5-routing.module';
import { C5Component } from './c5/c5.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    C5Component
  ],
  imports: [
    CommonModule,
    C5RoutingModule,
    FormsModule
  ]
})
export class C5Module { }
