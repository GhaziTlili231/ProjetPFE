import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { KawasakiRoutingModule } from './kawasaki-routing.module';
import { KawasakiComponent } from './kawasaki/kawasaki.component';


@NgModule({
  declarations: [
    KawasakiComponent
  ],
  imports: [
    CommonModule,
    KawasakiRoutingModule
  ]
})
export class KawasakiModule { }
