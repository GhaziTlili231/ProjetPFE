import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FiorinoComponent } from './fiorino/fiorino.component';

const routes: Routes = [
  {path:'', component:FiorinoComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FiorinoRoutingModule { }
