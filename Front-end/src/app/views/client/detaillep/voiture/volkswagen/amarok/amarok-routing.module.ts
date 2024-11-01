import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AmarokComponent } from './amarok/amarok.component';

const routes: Routes = [
  {path:'', component:AmarokComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AmarokRoutingModule { }
