import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MeganeRoutingModule } from './megane-routing.module';
import { MeganeComponent } from './megane/megane.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    MeganeComponent
  ],
  imports: [
    CommonModule,
    MeganeRoutingModule,
    FormsModule
  ]
})
export class MeganeModule { }
