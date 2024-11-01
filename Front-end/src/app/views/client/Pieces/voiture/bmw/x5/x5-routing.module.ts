import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { X5Component } from './x5/x5.component';

const routes: Routes = [
  {path:'', component:X5Component}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class X5RoutingModule { }
