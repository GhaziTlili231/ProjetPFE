import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AudiRoutingModule } from './audi-routing.module';
import { AudiComponent } from './audi/audi.component';


@NgModule({
  declarations: [
    AudiComponent
  ],
  imports: [
    CommonModule,
    AudiRoutingModule
  ]
})
export class AudiModule { }
