import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Rav4Component } from './rav4/rav4.component';

const routes: Routes = [
  {path:'', component:Rav4Component}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Rav4RoutingModule { }
