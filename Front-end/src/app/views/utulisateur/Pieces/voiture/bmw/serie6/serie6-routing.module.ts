import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Serie6Component } from './serie6/serie6.component';

const routes: Routes = [
  {path:'', component:Serie6Component}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Serie6RoutingModule { }
