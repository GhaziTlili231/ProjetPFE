import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClasseGRoutingModule } from './classe-g-routing.module';
import { ClasseGComponent } from './classe-g/classe-g.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ClasseGComponent
  ],
  imports: [
    CommonModule,
    ClasseGRoutingModule,
    FormsModule
  ]
})
export class ClasseGModule { }
