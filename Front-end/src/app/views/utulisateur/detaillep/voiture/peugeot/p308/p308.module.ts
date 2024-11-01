import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { P308RoutingModule } from './p308-routing.module';
import { P308Component } from './p308/p308.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    P308Component
  ],
  imports: [
    CommonModule,
    P308RoutingModule,
    FormsModule
  ]
})
export class P308Module { }
