import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClasseaComponent } from './classea/classea.component';

const routes: Routes = [
  {path:'', component:ClasseaComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClasseaRoutingModule { }
