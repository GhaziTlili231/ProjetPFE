import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RioRoutingModule } from './rio-routing.module';
import { RioComponent } from './rio/rio.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    RioComponent
  ],
  imports: [
    CommonModule,
    RioRoutingModule,
    FormsModule
  ]
})
export class RioModule { }
