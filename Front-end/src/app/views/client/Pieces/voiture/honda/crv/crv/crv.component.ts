import { Component } from '@angular/core';

@Component({
  selector: 'app-crv',
  templateUrl: './crv.component.html',
  styleUrls: ['./crv.component.css']
})
export class CrvComponent {
  ids: number[] = [1, 2, 3, 4, 5, 6];
  routerLinks: string[] = [];

  constructor() {
    this.routerLinks = this.ids.map(id => `/client/voiture/honda/crv/pieces/${id}`);
  }
}
