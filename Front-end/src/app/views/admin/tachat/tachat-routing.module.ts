import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TachatComponent } from './tachat/tachat.component';

const routes: Routes = [
  { path: '', component: TachatComponent }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TachatRoutingModule { }
