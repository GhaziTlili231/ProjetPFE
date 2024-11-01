import { Component } from '@angular/core';

@Component({
  selector: 'app-golf5',
  templateUrl: './golf5.component.html',
  styleUrls: ['./golf5.component.css']
})
export class Golf5Component {
  ids: number[] = [1, 2, 3, 4, 5, 6];
  routerLinks: string[] = [];

  constructor() {
    this.routerLinks = this.ids.map(id => `/voiture/volkswagen/golf5/pieces/${id}`);
  }
}
