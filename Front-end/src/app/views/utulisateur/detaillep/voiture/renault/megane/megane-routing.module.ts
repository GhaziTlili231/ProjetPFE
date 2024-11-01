import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MeganeComponent } from './megane/megane.component';

const routes: Routes = [
  {path:'', component:MeganeComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MeganeRoutingModule { }
