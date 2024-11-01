import { Component } from '@angular/core';

@Component({
  selector: 'app-classe-g',
  templateUrl: './classe-g.component.html',
  styleUrls: ['./classe-g.component.css']
})
export class ClasseGComponent {
  ids: number[] = [1, 2, 3, 4, 5, 6];
  routerLinks: string[] = [];

  constructor() {
    this.routerLinks = this.ids.map(id => `/client/voiture/mercedes/classeg/pieces/${id}`);
  }
}
