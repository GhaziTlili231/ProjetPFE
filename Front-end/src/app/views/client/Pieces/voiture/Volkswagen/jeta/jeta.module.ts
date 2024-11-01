import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JetaRoutingModule } from './jeta-routing.module';
import { JetaComponent } from './jeta/jeta.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    JetaComponent
  ],
  imports: [
    CommonModule,
    JetaRoutingModule,
    FormsModule
  ]
})
export class JetaModule { }
