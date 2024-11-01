import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SuperbComponent } from './superb/superb.component';

const routes: Routes = [
  {path:'', component:SuperbComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SuperbRoutingModule { }
