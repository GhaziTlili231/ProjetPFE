import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FiorinoRoutingModule } from './fiorino-routing.module';
import { FiorinoComponent } from './fiorino/fiorino.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    FiorinoComponent
  ],
  imports: [
    CommonModule,
    FiorinoRoutingModule,
    FormsModule
  ]
})
export class FiorinoModule { }
