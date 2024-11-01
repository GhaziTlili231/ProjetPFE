import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OublierRoutingModule } from './oublier-routing.module';
import { OublierComponent } from './oublier/oublier.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    OublierComponent
  ],
  imports: [
    CommonModule,
    OublierRoutingModule,
    FormsModule
  ]
})
export class OublierModule { }
