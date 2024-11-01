import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JetaRoutingModule } from './jeta-routing.module';
import { JetaComponent } from './jeta/jeta.component';


@NgModule({
  declarations: [
    JetaComponent
  ],
  imports: [
    CommonModule,
    JetaRoutingModule
  ]
})
export class JetaModule { }
