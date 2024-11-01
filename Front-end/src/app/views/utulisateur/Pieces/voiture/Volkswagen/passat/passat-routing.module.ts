import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PassatComponent } from './passat/passat.component';

const routes: Routes = [
  {path:'', component:PassatComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PassatRoutingModule { }
