import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Golf6Component } from './golf6/golf6.component';

const routes: Routes = [
  {path:'', component:Golf6Component}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Golf6RoutingModule { }
