import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Golf2Component } from './golf2/golf2.component';

const routes: Routes = [
  {path:'', component:Golf2Component}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Golf2RoutingModule { }
