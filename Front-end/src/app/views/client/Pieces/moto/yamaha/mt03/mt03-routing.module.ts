import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Mt03Component } from './mt03/mt03.component';

const routes: Routes = [
  {path:'', component:Mt03Component}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Mt03RoutingModule { }
