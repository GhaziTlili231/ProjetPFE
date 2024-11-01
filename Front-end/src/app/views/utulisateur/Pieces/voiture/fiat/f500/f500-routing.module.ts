import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { F500Component } from './f500/f500.component';

const routes: Routes = [
  {path:'',component:F500Component}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class F500RoutingModule { }
