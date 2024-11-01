import { Component } from '@angular/core';

@Component({
  selector: 'app-z750',
  templateUrl: './z750.component.html',
  styleUrls: ['./z750.component.css']
})
export class Z750Component {
  ids: number[] = [1, 2, 3, 4, 5, 6];
  routerLinks: string[] = [];

  constructor() {
    this.routerLinks = this.ids.map(id => `/client/moto/kawasaki/z750/pieces/${id}`);
  }
}
