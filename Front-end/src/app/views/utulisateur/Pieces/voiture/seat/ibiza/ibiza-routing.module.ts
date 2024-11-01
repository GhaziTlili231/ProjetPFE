import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IbizaComponent } from './ibiza/ibiza.component';

const routes: Routes = [
  {path:'', component:IbizaComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IbizaRoutingModule { }
