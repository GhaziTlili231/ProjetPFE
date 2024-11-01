import { Component } from '@angular/core';

@Component({
  selector: 'app-berlingo',
  templateUrl: './berlingo.component.html',
  styleUrls: ['./berlingo.component.css']
})
export class BerlingoComponent {
  ids: number[] = [1, 2, 3, 4, 5, 6];
  routerLinks: string[] = [];

  constructor() {
    this.routerLinks = this.ids.map(id => `/voiture/citroen/berlingo/pieces/${id}`);
  }
}
