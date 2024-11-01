import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SorentoComponent } from './sorento/sorento.component';

const routes: Routes = [
  {path:'', component:SorentoComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SorentoRoutingModule { }
