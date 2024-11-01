import { Component } from '@angular/core';

@Component({
  selector: 'app-a6',
  templateUrl: './a6.component.html',
  styleUrls: ['./a6.component.css']
})
export class A6Component {
  ids: number[] = [1, 2, 3, 4, 5, 6];
  routerLinks: string[] = [];

  constructor() {
    this.routerLinks = this.ids.map(id => `/voiture/audi/a6/pieces/${id}`);
  }
}
