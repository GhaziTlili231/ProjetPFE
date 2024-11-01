import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { I20Component } from './i20/i20.component';

const routes: Routes = [
  {path:'', component:I20Component}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class I20RoutingModule { }
