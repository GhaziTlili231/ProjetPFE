import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HiluxRoutingModule } from './hilux-routing.module';
import { HiluxComponent } from './hilux/hilux.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    HiluxComponent
  ],
  imports: [
    CommonModule,
    HiluxRoutingModule,
    FormsModule
  ]
})
export class HiluxModule { }
