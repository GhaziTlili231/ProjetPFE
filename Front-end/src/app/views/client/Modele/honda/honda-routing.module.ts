import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HondaComponent } from './honda/honda.component';

const routes: Routes = [
  {path:'',component:HondaComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HondaRoutingModule { }
