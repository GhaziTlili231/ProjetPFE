import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginutulisateurRoutingModule } from './loginutulisateur-routing.module';
import { FormsModule } from '@angular/forms';
import { LoginutulisateurComponent } from './loginutulisateur/loginutulisateur.component'; // Vérifiez le chemin d'accès vers le composant

@NgModule({
  declarations: [
    LoginutulisateurComponent // Utilisez le bon nom de composant ici
  ],
  imports: [
    CommonModule,
    LoginutulisateurRoutingModule,
    FormsModule
  ]
})
export class LoginutulisateurModule { }
