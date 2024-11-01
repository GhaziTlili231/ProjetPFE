import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TrivoliRoutingModule } from './trivoli-routing.module';
import { TrivoliComponent } from './trivoli/trivoli.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    TrivoliComponent
  ],
  imports: [
    CommonModule,
    TrivoliRoutingModule,
    FormsModule
  ]
})
export class TrivoliModule { }
