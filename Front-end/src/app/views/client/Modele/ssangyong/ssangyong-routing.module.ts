import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SsangyongComponent } from './ssangyong/ssangyong.component';

const routes: Routes = [
  {path:'',component:SsangyongComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SsangyongRoutingModule { }
