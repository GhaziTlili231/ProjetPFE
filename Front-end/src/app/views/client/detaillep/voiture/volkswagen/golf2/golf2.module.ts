import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Golf2RoutingModule } from './golf2-routing.module';
import { Golf2Component } from './golf2/golf2.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    Golf2Component
  ],
  imports: [
    CommonModule,
    Golf2RoutingModule,
    FormsModule
  ]
})
export class Golf2Module { }
