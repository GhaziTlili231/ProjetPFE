import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CliocampusComponent } from './cliocampus/cliocampus.component';

const routes: Routes = [
  {path:'', component:CliocampusComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CliocampusRoutingModule { }
