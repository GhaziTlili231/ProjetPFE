import { Component } from '@angular/core';

@Component({
  selector: 'app-golf8',
  templateUrl: './golf8.component.html',
  styleUrls: ['./golf8.component.css']
})
export class Golf8Component {
  ids: number[] = [1, 2, 3, 4, 5, 6];
  routerLinks: string[] = [];

  constructor() {
    this.routerLinks = this.ids.map(id => `/voiture/volkswagen/golf8/pieces/${id}`);
  }
}
