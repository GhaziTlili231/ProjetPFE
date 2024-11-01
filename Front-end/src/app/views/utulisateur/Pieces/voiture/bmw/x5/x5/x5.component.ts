import { Component } from '@angular/core';

@Component({
  selector: 'app-x5',
  templateUrl: './x5.component.html',
  styleUrls: ['./x5.component.css']
})
export class X5Component {
  ids: number[] = [1, 2, 3, 4, 5, 6];
  routerLinks: string[] = [];

  constructor() {
    this.routerLinks = this.ids.map(id => `/voiture/bmw/x5/pieces/${id}`);
  }
}
