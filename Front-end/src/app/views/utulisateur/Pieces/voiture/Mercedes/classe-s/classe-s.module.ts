import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClasseSRoutingModule } from './classe-s-routing.module';
import { ClasseSComponent } from './classe-s/classe-s.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ClasseSComponent
  ],
  imports: [
    CommonModule,
    ClasseSRoutingModule,
    FormsModule
  ]
})
export class ClasseSModule { }
