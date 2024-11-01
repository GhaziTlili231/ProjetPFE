import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AcceuiladminComponent } from './acceuiladmin/acceuiladmin.component';

const routes: Routes = [
  {path:'',component:AcceuiladminComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AcceuiladminRoutingModule { }
