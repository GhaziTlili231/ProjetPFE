import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { P206RoutingModule } from './p206-routing.module';
import { P206Component } from './p206/p206.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    P206Component
  ],
  imports: [
    CommonModule,
    P206RoutingModule,
    FormsModule
  ]
})
export class P206Module { }
