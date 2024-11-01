import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { KushaqComponent } from './kushaq/kushaq.component';

const routes: Routes = [
  {path:'', component:KushaqComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class KushaqRoutingModule { }
