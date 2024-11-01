import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PiecesRoutingModule } from './pieces-routing.module';
import { PiecesComponent } from './pieces/pieces.component';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    PiecesComponent
  ],
  imports: [
    CommonModule,
    PiecesRoutingModule,
    FormsModule,
    HttpClientModule
  ]
})
export class PiecesModule { }
