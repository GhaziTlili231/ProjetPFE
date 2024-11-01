import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { KorandoComponent } from './korando/korando.component';

const routes: Routes = [
  {path:'', component:KorandoComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class KorandoRoutingModule { }
