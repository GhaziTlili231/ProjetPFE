import { Component } from '@angular/core';

@Component({
  selector: 'app-rio',
  templateUrl: './rio.component.html',
  styleUrls: ['./rio.component.css']
})
export class RioComponent {
  ids: number[] = [1, 2, 3, 4, 5, 6];
  routerLinks: string[] = [];

  constructor() {
    this.routerLinks = this.ids.map(id => `/voiture/kia/rio/pieces/${id}`);
  }
}
