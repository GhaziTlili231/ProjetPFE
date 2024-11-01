import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CliodynamiqueRoutingModule } from './cliodynamique-routing.module';
import { CliodynamqueComponent } from './cliodynamque/cliodynamque.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    CliodynamqueComponent
  ],
  imports: [
    CommonModule,
    CliodynamiqueRoutingModule,
    FormsModule
  ]
})
export class CliodynamiqueModule { }
