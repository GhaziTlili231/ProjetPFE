import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CitroenRoutingModule } from './citroen-routing.module';
import { CitroenComponent } from './citroen/citroen.component';


@NgModule({
  declarations: [
    CitroenComponent
  ],
  imports: [
    CommonModule,
    CitroenRoutingModule
  ]
})
export class CitroenModule { }
