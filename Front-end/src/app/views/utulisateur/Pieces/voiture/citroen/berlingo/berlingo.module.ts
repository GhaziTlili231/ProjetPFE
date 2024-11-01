import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BerlingoRoutingModule } from './berlingo-routing.module';
import { BerlingoComponent } from './berlingo/berlingo.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    BerlingoComponent
  ],
  imports: [
    CommonModule,
    BerlingoRoutingModule,
    FormsModule
  ]
})
export class BerlingoModule { }
