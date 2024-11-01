import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HyundaiComponent } from './hyundai/hyundai.component';

const routes: Routes = [
  {path:'',component:HyundaiComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HyundaiRoutingModule { }
