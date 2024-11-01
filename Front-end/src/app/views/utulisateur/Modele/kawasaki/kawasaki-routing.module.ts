import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { KawasakiComponent } from './kawasaki/kawasaki.component';

const routes: Routes = [
  {path:'',component:KawasakiComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class KawasakiRoutingModule { }
