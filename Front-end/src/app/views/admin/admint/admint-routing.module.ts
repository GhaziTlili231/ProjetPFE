import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdmintComponent } from './admint/admint.component';

const routes: Routes = [
  { path: '', component: AdmintComponent }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdmintRoutingModule { }
