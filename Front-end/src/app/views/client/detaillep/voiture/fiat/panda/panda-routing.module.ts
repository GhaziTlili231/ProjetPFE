import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PandaComponent } from './panda/panda.component';

const routes: Routes = [
  {path:'', component:PandaComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PandaRoutingModule { }
