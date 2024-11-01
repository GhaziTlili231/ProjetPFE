import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Golf4Component } from './golf4/golf4.component';

const routes: Routes = [
  {path:'', component:Golf4Component}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Golf4RoutingModule { }
