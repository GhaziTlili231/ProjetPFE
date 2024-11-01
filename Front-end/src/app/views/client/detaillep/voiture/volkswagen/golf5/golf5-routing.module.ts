import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Golf5Component } from './golf5/golf5.component';

const routes: Routes = [
  {path:'', component:Golf5Component}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Golf5RoutingModule { }
