import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { P206Component } from './p206/p206.component';

const routes: Routes = [
  {path:'', component:P206Component}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class P206RoutingModule { }
