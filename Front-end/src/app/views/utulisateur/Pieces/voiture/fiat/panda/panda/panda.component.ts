import { Component } from '@angular/core';

@Component({
  selector: 'app-panda',
  templateUrl: './panda.component.html',
  styleUrls: ['./panda.component.css']
})
export class PandaComponent {
  ids: number[] = [1, 2, 3, 4, 5, 6];
  routerLinks: string[] = [];

  constructor() {
    this.routerLinks = this.ids.map(id => `/voiture/fiat/panda/pieces/${id}`);
}
}
