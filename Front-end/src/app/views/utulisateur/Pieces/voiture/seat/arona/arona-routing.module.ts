import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AronaComponent } from './arona/arona.component';

const routes: Routes = [
  {path:'', component:AronaComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AronaRoutingModule { }
