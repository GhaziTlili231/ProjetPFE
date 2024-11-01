import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TouaregRoutingModule } from './touareg-routing.module';
import { TouaregComponent } from './touareg/touareg.component';


@NgModule({
  declarations: [
    TouaregComponent
  ],
  imports: [
    CommonModule,
    TouaregRoutingModule
  ]
})
export class TouaregModule { }
