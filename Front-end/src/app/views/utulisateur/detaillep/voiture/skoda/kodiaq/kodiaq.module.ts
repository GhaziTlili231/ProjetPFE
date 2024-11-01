import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { KodiaqRoutingModule } from './kodiaq-routing.module';
import { KodiaqComponent } from './kodiaq/kodiaq.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    KodiaqComponent
  ],
  imports: [
    CommonModule,
    KodiaqRoutingModule,
    FormsModule
  ]
})
export class KodiaqModule { }
