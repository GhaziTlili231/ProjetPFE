import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MercedesRoutingModule } from './mercedes-routing.module';
import { MercedesComponent } from './mercedes/mercedes.component';


@NgModule({
  declarations: [
    MercedesComponent
  ],
  imports: [
    CommonModule,
    MercedesRoutingModule
  ]
})
export class MercedesModule { }
