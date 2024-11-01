import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { YarisComponent } from './yaris/yaris.component';

const routes: Routes = [
  {path:'', component:YarisComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class YarisRoutingModule { }
