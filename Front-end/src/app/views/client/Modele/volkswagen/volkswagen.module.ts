import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VolkswagenRoutingModule } from './volkswagen-routing.module';
import { VolkswagenComponent } from './volkswagen/volkswagen.component';


@NgModule({
  declarations: [
    VolkswagenComponent
  ],
  imports: [
    CommonModule,
    VolkswagenRoutingModule
  ]
})
export class VolkswagenModule { }
