import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { XceedComponent } from './xceed/xceed.component';

const routes: Routes = [
  {path:'', component:XceedComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class XceedRoutingModule { }
