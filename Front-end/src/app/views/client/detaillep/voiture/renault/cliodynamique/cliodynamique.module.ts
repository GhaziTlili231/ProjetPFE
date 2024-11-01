import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CliodynamiqueRoutingModule } from './cliodynamique-routing.module';
import { CliodynamiqueComponent } from './cliodynamique/cliodynamique.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    CliodynamiqueComponent
  ],
  imports: [
    CommonModule,
    CliodynamiqueRoutingModule,
    FormsModule
  ]
})
export class CliodynamiqueModule { }
