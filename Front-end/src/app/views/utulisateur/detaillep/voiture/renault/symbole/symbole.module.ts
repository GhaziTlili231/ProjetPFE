import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SymboleRoutingModule } from './symbole-routing.module';
import { SymboleComponent } from './symbole/symbole.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    SymboleComponent
  ],
  imports: [
    CommonModule,
    SymboleRoutingModule,
    FormsModule
  ]
})
export class SymboleModule { }
