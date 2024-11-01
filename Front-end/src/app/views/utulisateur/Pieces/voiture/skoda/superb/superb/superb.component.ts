import { Component } from '@angular/core';

@Component({
  selector: 'app-superb',
  templateUrl: './superb.component.html',
  styleUrls: ['./superb.component.css']
})
export class SuperbComponent {
  ids: number[] = [1, 2, 3, 4, 5, 6];
    routerLinks: string[] = [];
  
    constructor() {
      this.routerLinks = this.ids.map(id => `/voiture/skoda/superb/pieces/${id}`);
    }
}
