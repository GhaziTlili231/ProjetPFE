import { Component } from '@angular/core';

@Component({
  selector: 'app-celysee',
  templateUrl: './celysee.component.html',
  styleUrls: ['./celysee.component.css']
})
export class CelyseeComponent {
  ids: number[] = [1, 2, 3, 4, 5, 6];
  routerLinks: string[] = [];

  constructor() {
    this.routerLinks = this.ids.map(id => `/voiture/citroen/celysee/pieces/${id}`);
  }
}
