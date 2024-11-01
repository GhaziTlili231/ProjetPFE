import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FabiaComponent } from './fabia/fabia.component';

const routes: Routes = [
  {path:'', component:FabiaComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FabiaRoutingModule { }
