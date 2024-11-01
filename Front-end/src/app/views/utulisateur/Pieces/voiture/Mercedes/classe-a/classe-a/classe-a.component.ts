import { Component } from '@angular/core';

@Component({
  selector: 'app-classe-a',
  templateUrl: './classe-a.component.html',
  styleUrls: ['./classe-a.component.css']
})
export class ClasseAComponent {
  ids: number[] = [1, 2, 3, 4, 5, 6];
  routerLinks: string[] = [];

  constructor() {
    this.routerLinks = this.ids.map(id => `/voiture/mercedes/classea/pieces/${id}`);
  }
}
