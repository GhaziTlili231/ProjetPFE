import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BerlingoComponent } from './berlingo/berlingo.component';

const routes: Routes = [
  {path:'', component:BerlingoComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BerlingoRoutingModule { }
