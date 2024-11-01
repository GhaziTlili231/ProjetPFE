import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClassegComponent } from './classeg/classeg.component';

const routes: Routes = [
  {path:'', component:ClassegComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClassegRoutingModule { }
