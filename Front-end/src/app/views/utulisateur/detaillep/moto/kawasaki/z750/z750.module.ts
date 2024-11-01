import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Z750RoutingModule } from './z750-routing.module';
import { Z750Component } from './z750/z750.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    Z750Component
  ],
  imports: [
    CommonModule,
    Z750RoutingModule,
    FormsModule
  ]
})
export class Z750Module { }
