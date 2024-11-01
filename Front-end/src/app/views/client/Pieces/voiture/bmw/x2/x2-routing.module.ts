import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { X2Component } from './x2/x2.component';

const routes: Routes = [
  {path:'', component:X2Component}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class X2RoutingModule { }
