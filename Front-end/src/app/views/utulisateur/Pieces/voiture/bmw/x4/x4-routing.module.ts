import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { X4Component } from './x4/x4.component';

const routes: Routes = [
  {path:'', component:X4Component}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class X4RoutingModule { }
