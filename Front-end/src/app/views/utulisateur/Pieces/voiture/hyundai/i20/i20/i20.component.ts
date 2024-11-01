import { Component } from '@angular/core';

@Component({
  selector: 'app-i20',
  templateUrl: './i20.component.html',
  styleUrls: ['./i20.component.css']
})
export class I20Component {
  ids: number[] = [1, 2, 3, 4, 5, 6];
  routerLinks: string[] = [];

  constructor() {
    this.routerLinks = this.ids.map(id => `/voiture/hyundai/i20/pieces/${id}`);
  }
}
