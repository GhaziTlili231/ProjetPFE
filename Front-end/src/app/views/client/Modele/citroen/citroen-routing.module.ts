import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CitroenComponent } from './citroen/citroen.component';

const routes: Routes = [
  {path:'',component:CitroenComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CitroenRoutingModule { }
