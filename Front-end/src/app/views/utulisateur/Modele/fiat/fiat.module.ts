import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FiatRoutingModule } from './fiat-routing.module';
import { FiatComponent } from './fiat/fiat.component';


@NgModule({
  declarations: [
    FiatComponent
  ],
  imports: [
    CommonModule,
    FiatRoutingModule
  ]
})
export class FiatModule { }
