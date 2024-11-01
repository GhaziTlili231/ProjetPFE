import { Component } from '@angular/core';

@Component({
  selector: 'app-megane',
  templateUrl: './megane.component.html',
  styleUrls: ['./megane.component.css']
})
export class MeganeComponent {
  ids: number[] = [1, 2, 3, 4, 5, 6];
  routerLinks: string[] = [];

  constructor() {
    this.routerLinks = this.ids.map(id => `/voiture/renault/megane/pieces/${id}`);
  }
}
