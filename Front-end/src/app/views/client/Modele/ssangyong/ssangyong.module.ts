import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SsangyongRoutingModule } from './ssangyong-routing.module';
import { SsangyongComponent } from './ssangyong/ssangyong.component';


@NgModule({
  declarations: [
    SsangyongComponent
  ],
  imports: [
    CommonModule,
    SsangyongRoutingModule
  ]
})
export class SsangyongModule { }
