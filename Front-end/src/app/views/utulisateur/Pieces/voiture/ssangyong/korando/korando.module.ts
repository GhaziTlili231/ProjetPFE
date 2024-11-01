import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { KorandoRoutingModule } from './korando-routing.module';
import { KorandoComponent } from './korando/korando.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    KorandoComponent
  ],
  imports: [
    CommonModule,
    KorandoRoutingModule,
    FormsModule
  ]
})
export class KorandoModule { }
