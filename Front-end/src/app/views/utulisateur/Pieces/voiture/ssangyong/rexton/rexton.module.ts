import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RextonRoutingModule } from './rexton-routing.module';
import { RextonComponent } from './rexton/rexton.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    RextonComponent
  ],
  imports: [
    CommonModule,
    RextonRoutingModule,
    FormsModule
  ]
})
export class RextonModule { }
