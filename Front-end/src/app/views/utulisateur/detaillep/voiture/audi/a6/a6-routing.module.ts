import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { A6Component } from './a6/a6.component';

const routes: Routes = [
  {path:'', component:A6Component}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class A6RoutingModule { }
