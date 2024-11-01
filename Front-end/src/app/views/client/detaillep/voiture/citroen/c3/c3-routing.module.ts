import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { C3Component } from './c3/c3.component';

const routes: Routes = [
  {path:'', component:C3Component}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class C3RoutingModule { }
