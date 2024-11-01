import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Golf1Component } from './golf1/golf1.component';

const routes: Routes = [
  {path:'', component:Golf1Component}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Golf1RoutingModule { }
