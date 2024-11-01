import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { KiaRoutingModule } from './kia-routing.module';
import { KiaComponent } from './kia/kia.component';


@NgModule({
  declarations: [
    KiaComponent
  ],
  imports: [
    CommonModule,
    KiaRoutingModule
  ]
})
export class KiaModule { }
