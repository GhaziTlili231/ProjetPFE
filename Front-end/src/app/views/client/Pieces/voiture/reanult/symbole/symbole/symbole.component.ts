import { Component } from '@angular/core';

@Component({
  selector: 'app-symbole',
  templateUrl: './symbole.component.html',
  styleUrls: ['./symbole.component.css']
})
export class SymboleComponent {
  ids: number[] = [1, 2, 3, 4, 5, 6];
  routerLinks: string[] = [];

  constructor() {
    this.routerLinks = this.ids.map(id => `/client/voiture/renault/symbole/pieces/${id}`);
  }
}
