import { Component } from '@angular/core';

@Component({
  selector: 'app-p308',
  templateUrl: './p308.component.html',
  styleUrls: ['./p308.component.css']
})
export class P308Component {
  ids: number[] = [1, 2, 3, 4, 5, 6];
  routerLinks: string[] = [];

  constructor() {
    this.routerLinks = this.ids.map(id => `/client/voiture/peugeot/p308/pieces/${id}`);
  }
}
