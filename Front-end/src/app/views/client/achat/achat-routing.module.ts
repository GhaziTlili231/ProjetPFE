import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AchatComponent } from './achat/achat.component';

const routes: Routes = [
  {path:'',component:AchatComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AchatRoutingModule { }
