import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { YamahaRoutingModule } from './yamaha-routing.module';
import { YamahaComponent } from './yamaha/yamaha.component';


@NgModule({
  declarations: [
    YamahaComponent
  ],
  imports: [
    CommonModule,
    YamahaRoutingModule
  ]
})
export class YamahaModule { }
