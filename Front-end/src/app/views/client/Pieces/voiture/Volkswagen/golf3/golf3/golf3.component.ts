import { Component } from '@angular/core';

@Component({
  selector: 'app-golf3',
  templateUrl: './golf3.component.html',
  styleUrls: ['./golf3.component.css']
})
export class Golf3Component {
  ids: number[] = [1, 2, 3, 4, 5, 6];
  routerLinks: string[] = [];

  constructor() {
    this.routerLinks = this.ids.map(id => `/client/voiture/volkswagen/golf3/pieces/${id}`);
  }
}
