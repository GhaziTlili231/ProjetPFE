import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ToyotaRoutingModule } from './toyota-routing.module';
import { ToyotaComponent } from './toyota/toyota.component';


@NgModule({
  declarations: [
    ToyotaComponent
  ],
  imports: [
    CommonModule,
    ToyotaRoutingModule
  ]
})
export class ToyotaModule { }
