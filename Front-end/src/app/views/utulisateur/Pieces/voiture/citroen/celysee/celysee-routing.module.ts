import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CelyseeComponent } from './celysee/celysee.component';

const routes: Routes = [
  {path:'', component:CelyseeComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CelyseeRoutingModule { }
