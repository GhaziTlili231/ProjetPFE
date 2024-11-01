import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PuntoComponent } from './punto/punto.component';

const routes: Routes = [
  {path:'',component:PuntoComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PuntoRoutingModule { }
