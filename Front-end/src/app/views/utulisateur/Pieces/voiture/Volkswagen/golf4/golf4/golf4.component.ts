import { Component } from '@angular/core';

@Component({
  selector: 'app-golf4',
  templateUrl: './golf4.component.html',
  styleUrls: ['./golf4.component.css']
})
export class Golf4Component {
  ids: number[] = [1, 2, 3, 4, 5, 6];
  routerLinks: string[] = [];

  constructor() {
    this.routerLinks = this.ids.map(id => `/voiture/volkswagen/golf4/pieces/${id}`);
  }
}
