import { Component } from '@angular/core';

@Component({
  selector: 'app-p3008',
  templateUrl: './p3008.component.html',
  styleUrls: ['./p3008.component.css']
})
export class P3008Component {
  ids: number[] = [1, 2, 3, 4, 5, 6];
  routerLinks: string[] = [];

  constructor() {
    this.routerLinks = this.ids.map(id => `/client/voiture/peugeot/p3008/pieces/${id}`);
  }
}
