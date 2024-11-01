import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { I10Component } from './i10/i10.component';

const routes: Routes = [
  {path:'', component:I10Component}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class I10RoutingModule { }
