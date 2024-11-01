import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TiguanRoutingModule } from './tiguan-routing.module';
import { TiguanComponent } from './tiguan/tiguan.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    TiguanComponent
  ],
  imports: [
    CommonModule,
    TiguanRoutingModule,
    FormsModule
  ]
})
export class TiguanModule { }
