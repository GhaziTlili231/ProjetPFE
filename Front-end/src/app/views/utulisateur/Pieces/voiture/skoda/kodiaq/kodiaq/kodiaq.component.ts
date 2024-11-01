import { Component } from '@angular/core';

@Component({
  selector: 'app-kodiaq',
  templateUrl: './kodiaq.component.html',
  styleUrls: ['./kodiaq.component.css']
})
export class KodiaqComponent {
  ids: number[] = [1, 2, 3, 4, 5, 6];
    routerLinks: string[] = [];
  
    constructor() {
      this.routerLinks = this.ids.map(id => `/voiture/skoda/kodiaq/pieces/${id}`);
    }
}
