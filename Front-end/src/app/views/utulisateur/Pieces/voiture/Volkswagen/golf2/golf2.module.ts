import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Golf2RoutingModule } from './golf2-routing.module';
import { Golf2Component } from './golf2/golf2.component';


@NgModule({
  declarations: [
    Golf2Component
  ],
  imports: [
    CommonModule,
    Golf2RoutingModule
  ]
})
export class Golf2Module { }
