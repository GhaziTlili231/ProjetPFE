import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InscrireutulisateurRoutingModule } from './inscrireutulisateur-routing.module';
import { InscrireutulisateurComponent } from './inscrireutulisateur/inscrireutulisateur.component'; // Changer le chemin si nécessaire
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    InscrireutulisateurComponent
  ],
  imports: [
    
    CommonModule,
    InscrireutulisateurRoutingModule,
    FormsModule,
    HttpClientModule, FormsModule, ReactiveFormsModule
  ],
  providers: [],
})
export class InscrireutulisateurModule { }
