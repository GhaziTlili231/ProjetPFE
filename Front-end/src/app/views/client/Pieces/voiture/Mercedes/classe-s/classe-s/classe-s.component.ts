import { Component } from '@angular/core';

@Component({
  selector: 'app-classe-s',
  templateUrl: './classe-s.component.html',
  styleUrls: ['./classe-s.component.css']
})
export class ClasseSComponent {
  ids: number[] = [1, 2, 3, 4, 5, 6];
  routerLinks: string[] = [];

  constructor() {
    this.routerLinks = this.ids.map(id => `/client/voiture/mercedes/classes/pieces/${id}`);
  }
}
