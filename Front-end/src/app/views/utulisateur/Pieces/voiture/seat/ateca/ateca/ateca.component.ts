import { Component } from '@angular/core';

@Component({
  selector: 'app-ateca',
  templateUrl: './ateca.component.html',
  styleUrls: ['./ateca.component.css']
})
export class AtecaComponent {
  ids: number[] = [1, 2, 3, 4, 5, 6];
  routerLinks: string[] = [];

  constructor() {
    this.routerLinks = this.ids.map(id => `/voiture/seat/ateca/pieces/${id}`);
}
}
