import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PeugeotComponent } from './peugeot/peugeot.component';

const routes: Routes = [
  {path:'',component:PeugeotComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PeugeotRoutingModule { }
