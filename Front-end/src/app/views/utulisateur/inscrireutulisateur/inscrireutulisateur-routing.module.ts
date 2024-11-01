import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InscrireutulisateurComponent } from './inscrireutulisateur/inscrireutulisateur.component'; // Changer le chemin si nécessaire

const routes: Routes = [
  { path: '', component: InscrireutulisateurComponent }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InscrireutulisateurRoutingModule { }
