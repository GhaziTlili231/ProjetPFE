import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MercedesComponent } from './mercedes/mercedes.component';

const routes: Routes = [
  {path:'',component:MercedesComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MercedesRoutingModule { }
