import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FabiaRoutingModule } from './fabia-routing.module';
import { FabiaComponent } from './fabia/fabia.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    FabiaComponent
  ],
  imports: [
    CommonModule,
    FabiaRoutingModule,
    FormsModule
  ]
})
export class FabiaModule { }
