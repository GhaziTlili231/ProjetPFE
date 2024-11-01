import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { X3Component } from './x3/x3.component';

const routes: Routes = [
  {path:'', component:X3Component}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class X3RoutingModule { }
