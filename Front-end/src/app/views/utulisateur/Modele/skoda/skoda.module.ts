import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SkodaRoutingModule } from './skoda-routing.module';
import { SkodaComponent } from './skoda/skoda.component';


@NgModule({
  declarations: [
    SkodaComponent
  ],
  imports: [
    CommonModule,
    SkodaRoutingModule
  ]
})
export class SkodaModule { }
