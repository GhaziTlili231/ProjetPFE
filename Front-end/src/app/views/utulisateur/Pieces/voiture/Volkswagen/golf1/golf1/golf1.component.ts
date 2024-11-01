import { Component } from '@angular/core';

@Component({
  selector: 'app-golf1',
  templateUrl: './golf1.component.html',
  styleUrls: ['./golf1.component.css']
})
export class Golf1Component {
  ids: number[] = [1, 2, 3, 4, 5, 6];
  routerLinks: string[] = [];

  constructor() {
    this.routerLinks = this.ids.map(id => `/voiture/volkswagen/golf1/pieces/${id}`);
  }
}
