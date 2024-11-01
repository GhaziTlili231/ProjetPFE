import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClasseaRoutingModule } from './classea-routing.module';
import { ClasseaComponent } from './classea/classea.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ClasseaComponent
  ],
  imports: [
    CommonModule,
    ClasseaRoutingModule,
    FormsModule
  ]
})
export class ClasseaModule { }
