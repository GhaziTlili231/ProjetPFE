import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AtecaRoutingModule } from './ateca-routing.module';
import { AtecaComponent } from './ateca/ateca.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AtecaComponent
  ],
  imports: [
    CommonModule,
    AtecaRoutingModule,
    FormsModule
  ]
})
export class AtecaModule { }
