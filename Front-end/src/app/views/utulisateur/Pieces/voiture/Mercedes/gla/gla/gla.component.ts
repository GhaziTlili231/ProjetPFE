import { Component } from '@angular/core';

@Component({
  selector: 'app-gla',
  templateUrl: './gla.component.html',
  styleUrls: ['./gla.component.css']
})
export class GlaComponent {
  ids: number[] = [1, 2, 3, 4, 5, 6];
  routerLinks: string[] = [];

  constructor() {
    this.routerLinks = this.ids.map(id => `/voiture/mercedes/gla/pieces/${id}`);
  }
}
