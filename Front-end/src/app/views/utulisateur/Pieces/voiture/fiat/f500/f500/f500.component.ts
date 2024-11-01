import { Component } from '@angular/core';

@Component({
  selector: 'app-f500',
  templateUrl: './f500.component.html',
  styleUrls: ['./f500.component.css']
})
export class F500Component {
  ids: number[] = [1, 2, 3, 4, 5, 6];
  routerLinks: string[] = [];

  constructor() {
    this.routerLinks = this.ids.map(id => `/voiture/fiat/f500/pieces/${id}`);
}
}
