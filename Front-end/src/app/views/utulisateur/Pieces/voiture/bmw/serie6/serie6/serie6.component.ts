import { Component } from '@angular/core';

@Component({
  selector: 'app-serie6',
  templateUrl: './serie6.component.html',
  styleUrls: ['./serie6.component.css']
})
export class Serie6Component {
  ids: number[] = [1, 2, 3, 4, 5, 6];
  routerLinks: string[] = [];

  constructor() {
    this.routerLinks = this.ids.map(id => `/voiture/bmw/serie6/pieces/${id}`);
  }
}
