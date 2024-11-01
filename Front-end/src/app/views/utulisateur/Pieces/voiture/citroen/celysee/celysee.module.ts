import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CelyseeRoutingModule } from './celysee-routing.module';
import { CelyseeComponent } from './celysee/celysee.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    CelyseeComponent
  ],
  imports: [
    CommonModule,
    CelyseeRoutingModule,
    FormsModule
  ]
})
export class CelyseeModule { }
