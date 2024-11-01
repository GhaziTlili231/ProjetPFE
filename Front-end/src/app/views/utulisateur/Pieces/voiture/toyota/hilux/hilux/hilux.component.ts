import { Component } from '@angular/core';

@Component({
  selector: 'app-hilux',
  templateUrl: './hilux.component.html',
  styleUrls: ['./hilux.component.css']
})
export class HiluxComponent {
  ids: number[] = [1, 2, 3, 4, 5, 6];
  routerLinks: string[] = [];

  constructor() {
    this.routerLinks = this.ids.map(id => `/voiture/toyota/hilux/pieces/${id}`);
  }
}
