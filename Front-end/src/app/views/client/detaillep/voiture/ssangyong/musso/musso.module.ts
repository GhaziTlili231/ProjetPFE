import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MussoRoutingModule } from './musso-routing.module';
import { MussoComponent } from './musso/musso.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    MussoComponent
  ],
  imports: [
    CommonModule,
    MussoRoutingModule,
    FormsModule
  ]
})
export class MussoModule { }
