import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Rav4RoutingModule } from './rav4-routing.module';
import { Rav4Component } from './rav4/rav4.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    Rav4Component
  ],
  imports: [
    CommonModule,
    Rav4RoutingModule,
    FormsModule
  ]
})
export class Rav4Module { }
