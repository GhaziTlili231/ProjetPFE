import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TouaregComponent } from './touareg/touareg.component';

const routes: Routes = [
  {path:'', component:TouaregComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TouaregRoutingModule { }
