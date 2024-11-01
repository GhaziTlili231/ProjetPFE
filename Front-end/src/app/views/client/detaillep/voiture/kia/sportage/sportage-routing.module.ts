import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SportageComponent } from './sportage/sportage.component';

const routes: Routes = [
  {path:'', component:SportageComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SportageRoutingModule { }
