import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClasseSComponent } from './classe-s/classe-s.component';

const routes: Routes = [
  {path:'', component:ClasseSComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClasseSRoutingModule { }
