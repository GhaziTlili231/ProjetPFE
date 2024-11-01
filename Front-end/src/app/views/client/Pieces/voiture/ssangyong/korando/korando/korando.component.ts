import { Component } from '@angular/core';

@Component({
  selector: 'app-korando',
  templateUrl: './korando.component.html',
  styleUrls: ['./korando.component.css']
})
export class KorandoComponent {
  ids: number[] = [1, 2, 3, 4, 5, 6];
  routerLinks: string[] = [];

  constructor() {
    this.routerLinks = this.ids.map(id => `/client/voiture/ssangyong/korando/pieces/${id}`);
  }
}
