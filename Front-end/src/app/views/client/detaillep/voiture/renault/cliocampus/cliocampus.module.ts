import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CliocampusRoutingModule } from './cliocampus-routing.module';
import { CliocampusComponent } from './cliocampus/cliocampus.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    CliocampusComponent
  ],
  imports: [
    CommonModule,
    CliocampusRoutingModule,
    FormsModule
  ]
})
export class CliocampusModule { }
