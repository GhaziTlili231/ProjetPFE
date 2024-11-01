import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LeonRoutingModule } from './leon-routing.module';
import { LeonComponent } from './leon/leon.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    LeonComponent
  ],
  imports: [
    CommonModule,
    LeonRoutingModule,
    FormsModule
  ]
})
export class LeonModule { }
