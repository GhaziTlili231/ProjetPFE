import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { P3008Component } from './p3008/p3008.component';

const routes: Routes = [
  {path:'', component:P3008Component}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class P3008RoutingModule { }
