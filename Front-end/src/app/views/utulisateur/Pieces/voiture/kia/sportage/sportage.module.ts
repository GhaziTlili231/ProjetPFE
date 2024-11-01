import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SportageRoutingModule } from './sportage-routing.module';
import { SportageComponent } from './sportage.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    SportageComponent
  ],
  imports: [
    CommonModule,
    SportageRoutingModule,
    FormsModule
  ]
})
export class SportageModule { }
