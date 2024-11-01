import { Component } from '@angular/core';

@Component({
  selector: 'app-aygo',
  templateUrl: './aygo.component.html',
  styleUrls: ['./aygo.component.css']
})
export class AygoComponent {
  ids: number[] = [1, 2, 3, 4, 5, 6];
  routerLinks: string[] = [];

  constructor() {
    this.routerLinks = this.ids.map(id => `/voiture/toyota/aygo/pieces/${id}`);
  }
}
