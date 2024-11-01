import { Component } from '@angular/core';

@Component({
  selector: 'app-musso',
  templateUrl: './musso.component.html',
  styleUrls: ['./musso.component.css']
})
export class MussoComponent {
  ids: number[] = [1, 2, 3, 4, 5, 6];
  routerLinks: string[] = [];

  constructor() {
    this.routerLinks = this.ids.map(id => `/voiture/ssangyong/musso/pieces/${id}`);
  }
}
