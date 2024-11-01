import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrvComponent } from './crv/crv.component';

const routes: Routes = [
  {path:'', component:CrvComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CrvRoutingModule { }
