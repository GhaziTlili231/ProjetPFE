import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { A4Component } from './a4/a4.component';

const routes: Routes = [
  {path:'', component:A4Component}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class A4RoutingModule { }
