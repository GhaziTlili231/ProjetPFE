import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FiatComponent } from './fiat/fiat.component';

const routes: Routes = [
  {path:'',component:FiatComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FiatRoutingModule { }
