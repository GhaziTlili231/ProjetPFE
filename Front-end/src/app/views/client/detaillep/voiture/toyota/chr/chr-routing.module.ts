import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChrComponent } from './chr/chr.component';

const routes: Routes = [
  {path:'', component:ChrComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChrRoutingModule { }
