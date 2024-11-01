import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SymboleComponent } from './symbole/symbole.component';

const routes: Routes = [
  {path:'', component:SymboleComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SymboleRoutingModule { }
