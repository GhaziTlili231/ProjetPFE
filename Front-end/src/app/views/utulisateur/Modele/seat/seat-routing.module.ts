import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SeatComponent } from './seat/seat.component';

const routes: Routes = [
  {path:'',component:SeatComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SeatRoutingModule { }
