import { Component } from '@angular/core';

@Component({
  selector: 'app-x3',
  templateUrl: './x3.component.html',
  styleUrls: ['./x3.component.css']
})
export class X3Component {
  ids: number[] = [1, 2, 3, 4, 5, 6];
  routerLinks: string[] = [];

  constructor() {
    this.routerLinks = this.ids.map(id => `/client/voiture/bmw/x3/pieces/${id}`);
  }
}
