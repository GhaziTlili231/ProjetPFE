import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Z1000RoutingModule } from './z1000-routing.module';
import { Z1000Component } from './z1000/z1000.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    Z1000Component
  ],
  imports: [
    CommonModule,
    Z1000RoutingModule,
    FormsModule
  ]
})
export class Z1000Module { }
