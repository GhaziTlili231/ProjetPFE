import { Component } from '@angular/core';

@Component({
  selector: 'app-p206',
  templateUrl: './p206.component.html',
  styleUrls: ['./p206.component.css']
})
export class P206Component {
  ids: number[] = [1, 2, 3, 4, 5, 6];
  routerLinks: string[] = [];

  constructor() {
    this.routerLinks = this.ids.map(id => `/voiture/peugeot/p206/pieces/${id}`);
  }
}
