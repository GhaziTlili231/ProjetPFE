import { Component } from '@angular/core';

@Component({
  selector: 'app-i10',
  templateUrl: './i10.component.html',
  styleUrls: ['./i10.component.css']
})
export class I10Component {
  ids: number[] = [1, 2, 3, 4, 5, 6];
  routerLinks: string[] = [];

  constructor() {
    this.routerLinks = this.ids.map(id => `/client/voiture/hyundai/i10/pieces/${id}`);
  }
}
