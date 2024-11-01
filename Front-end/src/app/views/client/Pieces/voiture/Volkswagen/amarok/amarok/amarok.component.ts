import { Component } from '@angular/core';

@Component({
  selector: 'app-amarok',
  templateUrl: './amarok.component.html',
  styleUrls: ['./amarok.component.css']
})
export class AmarokComponent {
  ids: number[] = [1, 2, 3, 4, 5, 6];
  routerLinks: string[] = [];

  constructor() {
    this.routerLinks = this.ids.map(id => `/client/voiture/volkswagen/amarok/pieces/${id}`);
  }
}
