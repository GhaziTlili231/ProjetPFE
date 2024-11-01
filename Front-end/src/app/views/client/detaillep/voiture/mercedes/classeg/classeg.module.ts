import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClassegRoutingModule } from './classeg-routing.module';
import { ClassegComponent } from './classeg/classeg.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ClassegComponent
  ],
  imports: [
    CommonModule,
    ClassegRoutingModule,
    FormsModule
  ]
})
export class ClassegModule { }
