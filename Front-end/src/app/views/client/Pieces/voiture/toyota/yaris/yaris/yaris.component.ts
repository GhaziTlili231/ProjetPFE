import { Component } from '@angular/core';

@Component({
  selector: 'app-yaris',
  templateUrl: './yaris.component.html',
  styleUrls: ['./yaris.component.css']
})
export class YarisComponent {
  ids: number[] = [1, 2, 3, 4, 5, 6];
  routerLinks: string[] = [];

  constructor() {
    this.routerLinks = this.ids.map(id => `/client/voiture/toyota/yaris/pieces/${id}`);
  }
}
