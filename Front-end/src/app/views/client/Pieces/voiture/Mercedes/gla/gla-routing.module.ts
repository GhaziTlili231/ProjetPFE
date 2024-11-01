import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GlaComponent } from './gla/gla.component';

const routes: Routes = [
  {path:'', component:GlaComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GlaRoutingModule { }
