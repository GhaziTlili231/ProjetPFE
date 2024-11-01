import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Golf3Component } from './golf3/golf3.component';

const routes: Routes = [
  {path:'', component:Golf3Component}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Golf3RoutingModule { }
