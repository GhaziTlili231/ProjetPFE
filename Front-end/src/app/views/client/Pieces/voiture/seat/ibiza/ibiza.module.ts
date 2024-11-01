import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IbizaRoutingModule } from './ibiza-routing.module';
import { IbizaComponent } from './ibiza/ibiza.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    IbizaComponent
  ],
  imports: [
    CommonModule,
    IbizaRoutingModule,
    FormsModule
  ]
})
export class IbizaModule { }
