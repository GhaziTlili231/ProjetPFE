import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TiguanRoutingModule } from './tiguan-routing.module';
import { TiguanComponent } from './tiguan/tiguan.component';


@NgModule({
  declarations: [
    TiguanComponent
  ],
  imports: [
    CommonModule,
    TiguanRoutingModule
  ]
})
export class TiguanModule { }
