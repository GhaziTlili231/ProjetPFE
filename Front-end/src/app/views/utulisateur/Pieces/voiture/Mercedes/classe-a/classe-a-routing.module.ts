import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClasseAComponent } from './classe-a/classe-a.component';

const routes: Routes = [
  {path:'', component:ClasseAComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClasseARoutingModule { }
