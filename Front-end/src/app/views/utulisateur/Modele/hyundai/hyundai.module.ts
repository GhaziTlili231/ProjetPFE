import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HyundaiRoutingModule } from './hyundai-routing.module';
import { HyundaiComponent } from './hyundai/hyundai.component';


@NgModule({
  declarations: [
    HyundaiComponent
  ],
  imports: [
    CommonModule,
    HyundaiRoutingModule
  ]
})
export class HyundaiModule { }
