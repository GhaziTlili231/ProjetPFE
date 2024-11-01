import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RenaultComponent } from './renault/renault.component';

const routes: Routes = [
  {path:'',component:RenaultComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RenaultRoutingModule { }
