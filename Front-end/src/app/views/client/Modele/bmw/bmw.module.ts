import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BmwRoutingModule } from './bmw-routing.module';
import { BmwComponent } from './bmw/bmw.component';


@NgModule({
  declarations: [
    BmwComponent
  ],
  imports: [
    CommonModule,
    BmwRoutingModule
  ]
})
export class BmwModule { }
