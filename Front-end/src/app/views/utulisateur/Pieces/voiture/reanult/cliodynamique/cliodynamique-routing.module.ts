import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CliodynamiqueModule } from './cliodynamique.module';
import { CliodynamqueComponent } from './cliodynamque/cliodynamque.component';

const routes: Routes = [
  {path:'', component:CliodynamqueComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CliodynamiqueRoutingModule { }
