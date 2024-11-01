import { Component } from '@angular/core';

@Component({
  selector: 'app-z1000',
  templateUrl: './z1000.component.html',
  styleUrls: ['./z1000.component.css']
})
export class Z1000Component {
  ids: number[] = [1, 2, 3, 4, 5, 6];
  routerLinks: string[] = [];

  constructor() {
    this.routerLinks = this.ids.map(id => `/moto/kawasaki/z1000/pieces/${id}`);
  }
}
