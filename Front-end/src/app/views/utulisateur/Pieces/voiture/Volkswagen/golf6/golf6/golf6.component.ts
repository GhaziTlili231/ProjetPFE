import { Component } from '@angular/core';

@Component({
  selector: 'app-golf6',
  templateUrl: './golf6.component.html',
  styleUrls: ['./golf6.component.css']
})
export class Golf6Component {
  ids: number[] = [1, 2, 3, 4, 5, 6];
  routerLinks: string[] = [];

  constructor() {
    this.routerLinks = this.ids.map(id => `/voiture/volkswagen/golf6/pieces/${id}`);
  }
}
