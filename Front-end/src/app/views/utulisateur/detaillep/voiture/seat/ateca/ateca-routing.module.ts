import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AtecaComponent } from './ateca/ateca.component';

const routes: Routes = [
  {path:'', component:AtecaComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AtecaRoutingModule { }
