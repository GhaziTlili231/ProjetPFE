import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { KushaqRoutingModule } from './kushaq-routing.module';
import { KushaqComponent } from './kushaq/kushaq.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    KushaqComponent
  ],
  imports: [
    CommonModule,
    KushaqRoutingModule,
    FormsModule
  ]
})
export class KushaqModule { }
