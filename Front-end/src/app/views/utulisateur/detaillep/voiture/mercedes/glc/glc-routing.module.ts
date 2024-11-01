import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GlcComponent } from './glc/glc.component';

const routes: Routes = [
  {path:'', component:GlcComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GlcRoutingModule { }
