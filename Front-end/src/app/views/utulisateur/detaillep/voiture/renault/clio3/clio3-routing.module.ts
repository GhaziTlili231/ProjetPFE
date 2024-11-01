import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Clio3Component } from './clio3/clio3.component';

const routes: Routes = [
  {path:'', component:Clio3Component}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Clio3RoutingModule { }
