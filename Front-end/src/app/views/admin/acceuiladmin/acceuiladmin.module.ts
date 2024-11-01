import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { AcceuiladminRoutingModule } from './acceuiladmin-routing.module';
import { AcceuiladminComponent } from './acceuiladmin/acceuiladmin.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AcceuiladminComponent
  ],
  imports: [
    CommonModule,
    AcceuiladminRoutingModule,
    HttpClientModule,
    FormsModule
  ]
})
export class AcceuiladminModule { }
