import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginutulisateurComponent } from './loginutulisateur/loginutulisateur.component'; // Assurez-vous d'importer le bon composant

const routes: Routes = [
  { path: '', component: LoginutulisateurComponent } // Utilisez le bon composant ici
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginutulisateurRoutingModule { }
