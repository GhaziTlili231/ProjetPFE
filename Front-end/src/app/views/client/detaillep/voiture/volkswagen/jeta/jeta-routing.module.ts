import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JetaComponent } from './jeta/jeta.component';

const routes: Routes = [
  {path:'', component:JetaComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class JetaRoutingModule { }
