import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClasseGComponent } from './classe-g/classe-g.component';

const routes: Routes = [  
  {path:'', component:ClasseGComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClasseGRoutingModule { }
