import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { KodiaqComponent } from './kodiaq/kodiaq.component';

const routes: Routes = [
  {path:'', component:KodiaqComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class KodiaqRoutingModule { }
