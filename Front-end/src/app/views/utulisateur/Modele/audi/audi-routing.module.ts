import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AudiComponent } from './audi/audi.component';

const routes: Routes = [
  {path:'',component:AudiComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AudiRoutingModule { }
