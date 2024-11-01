import { Component } from '@angular/core';

@Component({
  selector: 'app-trivoli',
  templateUrl: './trivoli.component.html',
  styleUrls: ['./trivoli.component.css']
})
export class TrivoliComponent {
  ids: number[] = [1, 2, 3, 4, 5, 6];
  routerLinks: string[] = [];

  constructor() {
    this.routerLinks = this.ids.map(id => `/voiture/ssangyong/trivoli/pieces/${id}`);
  }
}
