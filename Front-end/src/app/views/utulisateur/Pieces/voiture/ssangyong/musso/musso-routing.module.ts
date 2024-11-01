import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MussoComponent } from './musso/musso.component';

const routes: Routes = [
  {path:'', component:MussoComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MussoRoutingModule { }
