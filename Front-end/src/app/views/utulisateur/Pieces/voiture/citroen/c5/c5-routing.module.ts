import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { C5Component } from './c5/c5.component';

const routes: Routes = [
  {path:'', component:C5Component}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class C5RoutingModule { }
