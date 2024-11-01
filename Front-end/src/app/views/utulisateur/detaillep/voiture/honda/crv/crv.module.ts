import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CrvRoutingModule } from './crv-routing.module';
import { CrvComponent } from './crv/crv.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    CrvComponent
  ],
  imports: [
    CommonModule,
    CrvRoutingModule,
    FormsModule
  ]
})
export class CrvModule { }
