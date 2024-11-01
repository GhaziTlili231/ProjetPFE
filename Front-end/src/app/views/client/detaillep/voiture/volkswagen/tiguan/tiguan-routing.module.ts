import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TiguanComponent } from './tiguan/tiguan.component';

const routes: Routes = [
  {path:'', component:TiguanComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TiguanRoutingModule { }
