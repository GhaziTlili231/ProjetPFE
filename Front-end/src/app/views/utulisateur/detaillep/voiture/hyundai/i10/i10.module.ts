import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { I10RoutingModule } from './i10-routing.module';
import { I10Component } from './i10/i10.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    I10Component
  ],
  imports: [
    CommonModule,
    I10RoutingModule,
    FormsModule
  ]
})
export class I10Module { }
