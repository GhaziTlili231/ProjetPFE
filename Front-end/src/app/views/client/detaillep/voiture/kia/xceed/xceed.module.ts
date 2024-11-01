import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { XceedRoutingModule } from './xceed-routing.module';
import { XceedComponent } from './xceed/xceed.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    XceedComponent
  ],
  imports: [
    CommonModule,
    XceedRoutingModule,
    FormsModule
  ]
})
export class XceedModule { }
