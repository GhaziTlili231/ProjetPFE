import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AcceuilRoutingModule } from './acceuil-routing.module';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AcceuilComponent
  ],
  imports: [
    CommonModule,
    AcceuilRoutingModule,
    FormsModule
  ]
})
export class AcceuilModule { }
