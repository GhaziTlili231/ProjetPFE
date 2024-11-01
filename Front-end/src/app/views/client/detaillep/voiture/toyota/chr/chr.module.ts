import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChrRoutingModule } from './chr-routing.module';
import { ChrComponent } from './chr/chr.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ChrComponent
  ],
  imports: [
    CommonModule,
    ChrRoutingModule,
    FormsModule
  ]
})
export class ChrModule { }
