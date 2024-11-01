import { Component } from '@angular/core';

@Component({
  selector: 'app-q5',
  templateUrl: './q5.component.html',
  styleUrls: ['./q5.component.css']
})
export class Q5Component {
  ids: number[] = [1, 2, 3, 4, 5, 6];
  routerLinks: string[] = [];

  constructor() {
    this.routerLinks = this.ids.map(id => `/voiture/audi/q5/pieces/${id}`);
  }
}
