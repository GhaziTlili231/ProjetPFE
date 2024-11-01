import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RenaultRoutingModule } from './renault-routing.module';
import { RenaultComponent } from './renault/renault.component';


@NgModule({
  declarations: [
    RenaultComponent
  ],
  imports: [
    CommonModule,
    RenaultRoutingModule
  ]
})
export class RenaultModule { }
