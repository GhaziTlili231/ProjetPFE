import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TrivoliComponent } from './trivoli/trivoli.component';

const routes: Routes = [
  {path:'', component:TrivoliComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TrivoliRoutingModule { }
