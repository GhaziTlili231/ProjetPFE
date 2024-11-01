import { Component } from '@angular/core';

@Component({
  selector: 'app-x1',
  templateUrl: './x1.component.html',
  styleUrls: ['./x1.component.css']
})
export class X1Component {
  ids: number[] = [1, 2, 3, 4, 5, 6];
  routerLinks: string[] = [];

  constructor() {
    this.routerLinks = this.ids.map(id => `/voiture/bmw/x1/pieces/${id}`);
  }
}

