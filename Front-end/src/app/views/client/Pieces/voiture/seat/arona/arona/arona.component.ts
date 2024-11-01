import { Component } from '@angular/core';

@Component({
  selector: 'app-arona',
  templateUrl: './arona.component.html',
  styleUrls: ['./arona.component.css']
})
export class AronaComponent {
  ids: number[] = [1, 2, 3, 4, 5, 6];
  routerLinks: string[] = [];

  constructor() {
    this.routerLinks = this.ids.map(id => `/client/voiture/seat/arona/pieces/${id}`);
}
}
