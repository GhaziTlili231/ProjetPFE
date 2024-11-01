import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VehiculeRoutingModule } from './vehicule-routing.module';
import { VehiculeComponent } from './vehicule/vehicule.component';




@NgModule({
  declarations: [
    VehiculeComponent,
    
    
   
  ],
  imports: [
    CommonModule,
    VehiculeRoutingModule,
    
  ]
})
export class VehiculeModule { }
