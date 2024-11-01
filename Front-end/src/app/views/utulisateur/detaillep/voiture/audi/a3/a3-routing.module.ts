import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { A3Component } from './a3/a3.component';

const routes: Routes = [
  {path:'', component:A3Component}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class A3RoutingModule { }
