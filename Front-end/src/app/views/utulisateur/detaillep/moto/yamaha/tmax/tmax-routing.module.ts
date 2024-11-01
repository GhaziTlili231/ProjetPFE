import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TmaxComponent } from './tmax/tmax.component';

const routes: Routes = [
  {path:'', component:TmaxComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TmaxRoutingModule { }
