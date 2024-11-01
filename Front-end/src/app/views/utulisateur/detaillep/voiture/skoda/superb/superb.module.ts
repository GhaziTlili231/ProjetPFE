import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SuperbRoutingModule } from './superb-routing.module';
import { SuperbComponent } from './superb/superb.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    SuperbComponent
  ],
  imports: [
    CommonModule,
    SuperbRoutingModule,
    FormsModule
  ]
})
export class SuperbModule { }
