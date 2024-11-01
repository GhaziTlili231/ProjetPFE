import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PandaRoutingModule } from './panda-routing.module';
import { PandaComponent } from './panda/panda.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    PandaComponent
  ],
  imports: [
    CommonModule,
    PandaRoutingModule,
    FormsModule
  ]
})
export class PandaModule { }
