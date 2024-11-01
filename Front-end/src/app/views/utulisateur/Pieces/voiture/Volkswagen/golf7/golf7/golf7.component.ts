import { Component } from '@angular/core';

@Component({
  selector: 'app-golf7',
  templateUrl: './golf7.component.html',
  styleUrls: ['./golf7.component.css']
})
export class Golf7Component {
    ids: number[] = [1, 2, 3, 4, 5, 6];
    routerLinks: string[] = [];
  
    constructor() {
      this.routerLinks = this.ids.map(id => `/voiture/volkswagen/golf7/pieces/${id}`);
    }
}
