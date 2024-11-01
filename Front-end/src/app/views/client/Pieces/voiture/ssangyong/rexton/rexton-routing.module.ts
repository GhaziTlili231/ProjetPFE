import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RextonComponent } from './rexton/rexton.component';

const routes: Routes = [
  {path:'', component:RextonComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RextonRoutingModule { }
