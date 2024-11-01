import { Component } from '@angular/core';

@Component({
  selector: 'app-clio3',
  templateUrl: './clio3.component.html',
  styleUrls: ['./clio3.component.css']
})
export class Clio3Component {
  ids: number[] = [1, 2, 3, 4, 5, 6];
  routerLinks: string[] = [];

  constructor() {
    this.routerLinks = this.ids.map(id => `/client/voiture/renault/clio3/pieces/${id}`);
  }
}
