import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Golf7Component } from './golf7/golf7.component';

const routes: Routes = [
  {path:'', component:Golf7Component}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Golf7RoutingModule { }
