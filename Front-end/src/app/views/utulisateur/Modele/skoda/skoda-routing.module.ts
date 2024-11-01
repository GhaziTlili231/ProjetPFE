import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SkodaComponent } from './skoda/skoda.component';

const routes: Routes = [
  {path:'',component:SkodaComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SkodaRoutingModule { }
