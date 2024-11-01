import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TipoRoutingModule } from './tipo-routing.module';
import { TipoComponent } from './tipo/tipo.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    TipoComponent
  ],
  imports: [
    CommonModule,
    TipoRoutingModule,
    FormsModule
  ]
})
export class TipoModule { }
