import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClasseARoutingModule } from './classe-a-routing.module';
import { ClasseAComponent } from './classe-a/classe-a.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ClasseAComponent
  ],
  imports: [
    CommonModule,
    ClasseARoutingModule,
    FormsModule
  ]
})
export class ClasseAModule { }
