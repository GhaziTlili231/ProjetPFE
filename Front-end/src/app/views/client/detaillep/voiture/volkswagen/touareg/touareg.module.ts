import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TouaregRoutingModule } from './touareg-routing.module';
import { TouaregComponent } from './touareg/touareg.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    TouaregComponent
  ],
  imports: [
    CommonModule,
    TouaregRoutingModule,
    FormsModule
  ]
})
export class TouaregModule { }
