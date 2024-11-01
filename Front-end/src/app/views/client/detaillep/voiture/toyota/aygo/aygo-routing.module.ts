import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AygoComponent } from './aygo/aygo.component';

const routes: Routes = [
  {path:'', component:AygoComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AygoRoutingModule { }
