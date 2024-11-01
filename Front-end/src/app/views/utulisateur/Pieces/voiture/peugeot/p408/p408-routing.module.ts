import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { P408Component } from './p408/p408.component';

const routes: Routes = [
  {path:'', component:P408Component}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class P408RoutingModule { }
