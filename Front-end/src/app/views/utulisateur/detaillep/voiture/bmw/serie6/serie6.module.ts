import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Serie6RoutingModule } from './serie6-routing.module';
import { Serie6Component } from './serie6/serie6.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    Serie6Component
  ],
  imports: [
    CommonModule,
    Serie6RoutingModule,
    FormsModule
  ]
})
export class Serie6Module { }
