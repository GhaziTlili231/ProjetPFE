import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminLayoutComponent } from './admin-layout/admin-layout.component';
import { UtulisateurLayoutComponent } from './utulisateur-layout/utulisateur-layout.component';
import { ClientLayoutComponent } from './client-layout/client-layout.component';
import { RouterModule } from '@angular/router';
import { VoitureLayoutComponent } from './voiture-layout/voiture-layout.component';
import { PiecesLayoutComponent } from './pieces-layout/pieces-layout.component';



@NgModule({
  declarations: [
    AdminLayoutComponent,
    UtulisateurLayoutComponent,
    ClientLayoutComponent,
    VoitureLayoutComponent,
    PiecesLayoutComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class LayoutModule { }
