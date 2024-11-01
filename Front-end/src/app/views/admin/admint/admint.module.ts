import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdmintRoutingModule } from './admint-routing.module';
import { AdmintComponent } from './admint/admint.component';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { BrowserModule } from '@angular/platform-browser';


@NgModule({
  declarations: [
    AdmintComponent
  ],
  imports: [
    CommonModule,
    AdmintRoutingModule,
    FormsModule
    

  ]
})
export class AdmintModule { }
