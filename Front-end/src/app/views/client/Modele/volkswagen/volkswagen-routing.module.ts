import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VolkswagenComponent } from './volkswagen/volkswagen.component';

const routes: Routes = [
  {path:'',component:VolkswagenComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VolkswagenRoutingModule { }
