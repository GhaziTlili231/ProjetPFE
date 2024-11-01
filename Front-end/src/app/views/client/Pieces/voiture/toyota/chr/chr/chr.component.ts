import { Component } from '@angular/core';

@Component({
  selector: 'app-chr',
  templateUrl: './chr.component.html',
  styleUrls: ['./chr.component.css']
})
export class ChrComponent {
  ids: number[] = [1, 2, 3, 4, 5, 6];
  routerLinks: string[] = [];

  constructor() {
    this.routerLinks = this.ids.map(id => `/client/voiture/toyota/chr/pieces/${id}`);
  }
}
