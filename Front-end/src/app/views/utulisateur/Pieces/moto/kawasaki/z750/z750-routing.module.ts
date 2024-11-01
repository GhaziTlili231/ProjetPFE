import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Z750Component } from './z750/z750.component';

const routes: Routes = [
  {path:'', component:Z750Component}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Z750RoutingModule { }
