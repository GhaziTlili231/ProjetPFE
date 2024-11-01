import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Z1000Component } from './z1000/z1000.component';

const routes: Routes = [
  {path:'', component:Z1000Component}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Z1000RoutingModule { }
