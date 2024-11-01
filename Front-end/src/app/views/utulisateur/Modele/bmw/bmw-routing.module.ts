import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BmwComponent } from './bmw/bmw.component';

const routes: Routes = [
  {path:'',component:BmwComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BmwRoutingModule { }
