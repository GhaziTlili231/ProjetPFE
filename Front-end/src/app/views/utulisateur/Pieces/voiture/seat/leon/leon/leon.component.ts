import { Component } from '@angular/core';

@Component({
  selector: 'app-leon',
  templateUrl: './leon.component.html',
  styleUrls: ['./leon.component.css']
})
export class LeonComponent {
  ids: number[] = [1, 2, 3, 4, 5, 6];
    routerLinks: string[] = [];
  
    constructor() {
      this.routerLinks = this.ids.map(id => `/voiture/seat/leon/pieces/${id}`);
}
}