import { Component } from '@angular/core';

@Component({
  selector: 'app-rav4',
  templateUrl: './rav4.component.html',
  styleUrls: ['./rav4.component.css']
})
export class Rav4Component {
  ids: number[] = [1, 2, 3, 4, 5, 6];
  routerLinks: string[] = [];

  constructor() {
    this.routerLinks = this.ids.map(id => `/client/voiture/toyota/rav4/pieces/${id}`);
  }
}
