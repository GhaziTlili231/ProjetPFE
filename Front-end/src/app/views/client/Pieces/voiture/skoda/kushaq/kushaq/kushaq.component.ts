import { Component } from '@angular/core';

@Component({
  selector: 'app-kushaq',
  templateUrl: './kushaq.component.html',
  styleUrls: ['./kushaq.component.css']
})
export class KushaqComponent {
  ids: number[] = [1, 2, 3, 4, 5, 6];
    routerLinks: string[] = [];
  
    constructor() {
      this.routerLinks = this.ids.map(id => `/client/voiture/skoda/kushaq/pieces/${id}`);
    }
}
