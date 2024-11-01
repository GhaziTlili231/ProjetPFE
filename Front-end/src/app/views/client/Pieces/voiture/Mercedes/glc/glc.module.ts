import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GlcRoutingModule } from './glc-routing.module';
import { GlcComponent } from './glc/glc.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    GlcComponent
  ],
  imports: [
    CommonModule,
    GlcRoutingModule,
    FormsModule
  ]
})
export class GlcModule { }
