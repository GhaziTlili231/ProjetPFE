import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { X1Component } from './x1/x1.component';

const routes: Routes = [
  {path:'', component:X1Component}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class X1RoutingModule { }
