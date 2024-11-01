import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OublierModule } from './oublier.module';
import { OublierComponent } from './oublier/oublier.component';

const routes: Routes = [
  {path:'',component:OublierComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OublierRoutingModule { }
