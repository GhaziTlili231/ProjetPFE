import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TmaxRoutingModule } from './tmax-routing.module';
import { TmaxComponent } from './tmax/tmax.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    TmaxComponent
  ],
  imports: [
    CommonModule,
    TmaxRoutingModule,
    FormsModule
  ]
})
export class TmaxModule { }
