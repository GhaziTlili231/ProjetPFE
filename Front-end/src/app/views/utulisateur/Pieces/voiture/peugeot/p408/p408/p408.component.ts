import { Component } from '@angular/core';

@Component({
  selector: 'app-p408',
  templateUrl: './p408.component.html',
  styleUrls: ['./p408.component.css']
})
export class P408Component {
  ids: number[] = [1, 2, 3, 4, 5, 6];
  routerLinks: string[] = [];

  constructor() {
    this.routerLinks = this.ids.map(id => `/voiture/peugeot/p408/pieces/${id}`);
  }
}
