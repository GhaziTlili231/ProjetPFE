import { Component } from '@angular/core';

@Component({
  selector: 'app-mt03',
  templateUrl: './mt03.component.html',
  styleUrls: ['./mt03.component.css']
})
export class Mt03Component {
  ids: number[] = [1, 2, 3, 4, 5, 6];
  routerLinks: string[] = [];

  constructor() {
    this.routerLinks = this.ids.map(id => `/client/moto/yamaha/mt03/pieces/${id}`);
  }
}
