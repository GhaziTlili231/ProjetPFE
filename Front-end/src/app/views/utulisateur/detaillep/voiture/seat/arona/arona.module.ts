import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AronaRoutingModule } from './arona-routing.module';
import { AronaComponent } from './arona/arona.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AronaComponent
  ],
  imports: [
    CommonModule,
    AronaRoutingModule,
    FormsModule
  ]
})
export class AronaModule { }
