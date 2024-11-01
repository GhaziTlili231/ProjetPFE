import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RioComponent } from './rio/rio.component';

const routes: Routes = [
  {path:'', component:RioComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RioRoutingModule { }
