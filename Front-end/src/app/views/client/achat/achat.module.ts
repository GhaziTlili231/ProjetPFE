import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AchatRoutingModule } from './achat-routing.module';
import { AchatComponent } from './achat/achat.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AchatComponent
  ],
  imports: [
    CommonModule,
    AchatRoutingModule,
    FormsModule
  ]
})
export class AchatModule { }
