import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LeonComponent } from './leon/leon.component';

const routes: Routes = [
  {path:'', component:LeonComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LeonRoutingModule { }
