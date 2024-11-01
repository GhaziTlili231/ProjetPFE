import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TachatRoutingModule } from './tachat-routing.module';
import { TachatComponent } from './tachat/tachat.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    TachatComponent
  ],
  imports: [
    CommonModule,
    TachatRoutingModule,
    FormsModule
  ]
})
export class TachatModule { }
