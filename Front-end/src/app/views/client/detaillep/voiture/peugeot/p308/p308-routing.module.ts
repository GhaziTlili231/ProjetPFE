import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { P308Component } from './p308/p308.component';

const routes: Routes = [
  {path:'', component:P308Component}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class P308RoutingModule { }
