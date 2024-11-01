import { Component } from '@angular/core';

@Component({
  selector: 'app-x2',
  templateUrl: './x2.component.html',
  styleUrls: ['./x2.component.css']
})
export class X2Component {
  ids: number[] = [1, 2, 3, 4, 5, 6];
  routerLinks: string[] = [];

  constructor() {
    this.routerLinks = this.ids.map(id => `/voiture/bmw/x2/pieces/${id}`);
  }
}
