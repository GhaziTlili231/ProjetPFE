import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { YamahaComponent } from './yamaha/yamaha.component';

const routes: Routes = [
  {path:'',component:YamahaComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class YamahaRoutingModule { }
