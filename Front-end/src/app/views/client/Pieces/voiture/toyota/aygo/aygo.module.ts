import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AygoRoutingModule } from './aygo-routing.module';
import { AygoComponent } from './aygo/aygo.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AygoComponent
  ],
  imports: [
    CommonModule,
    AygoRoutingModule,
    FormsModule
  ]
})
export class AygoModule { }
