import { Component } from '@angular/core';

@Component({
  selector: 'app-fiorino',
  templateUrl: './fiorino.component.html',
  styleUrls: ['./fiorino.component.css']
})
export class FiorinoComponent {
  ids: number[] = [1, 2, 3, 4, 5, 6];
  routerLinks: string[] = [];

  constructor() {
    this.routerLinks = this.ids.map(id => `/client/voiture/fiat/fiorino/pieces/${id}`);
}
}
