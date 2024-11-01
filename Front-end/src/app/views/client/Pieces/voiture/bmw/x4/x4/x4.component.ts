import { Component } from '@angular/core';

@Component({
  selector: 'app-x4',
  templateUrl: './x4.component.html',
  styleUrls: ['./x4.component.css']
})
export class X4Component {
  ids: number[] = [1, 2, 3, 4, 5, 6];
  routerLinks: string[] = [];

  constructor() {
    this.routerLinks = this.ids.map(id => `/client/voiture/bmw/x4/pieces/${id}`);
  }
}
