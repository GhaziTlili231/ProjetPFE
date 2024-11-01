import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Golf8Component } from './golf8/golf8.component';

const routes: Routes = [
  {path:'', component:Golf8Component}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Golf8RoutingModule { }
