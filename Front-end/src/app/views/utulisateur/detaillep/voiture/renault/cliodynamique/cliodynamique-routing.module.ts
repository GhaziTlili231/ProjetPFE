import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CliodynamiqueComponent } from './cliodynamique/cliodynamique.component';

const routes: Routes = [
  {path:'', component:CliodynamiqueComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CliodynamiqueRoutingModule { }
