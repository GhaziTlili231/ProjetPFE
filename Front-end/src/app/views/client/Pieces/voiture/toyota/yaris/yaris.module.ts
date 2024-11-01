import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { YarisRoutingModule } from './yaris-routing.module';
import { YarisComponent } from './yaris/yaris.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    YarisComponent
  ],
  imports: [
    CommonModule,
    YarisRoutingModule,
    FormsModule
  ]
})
export class YarisModule { }
