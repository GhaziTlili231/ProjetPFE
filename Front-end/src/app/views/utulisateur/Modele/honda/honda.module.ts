import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HondaRoutingModule } from './honda-routing.module';
import { HondaComponent } from './honda/honda.component';


@NgModule({
  declarations: [
    HondaComponent
  ],
  imports: [
    CommonModule,
    HondaRoutingModule
  ]
})
export class HondaModule { }
