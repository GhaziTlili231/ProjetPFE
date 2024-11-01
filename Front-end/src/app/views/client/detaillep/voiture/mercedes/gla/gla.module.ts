import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GlaRoutingModule } from './gla-routing.module';
import { GlaComponent } from './gla/gla.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    GlaComponent
  ],
  imports: [
    CommonModule,
    GlaRoutingModule,
    FormsModule
  ]
})
export class GlaModule { }
