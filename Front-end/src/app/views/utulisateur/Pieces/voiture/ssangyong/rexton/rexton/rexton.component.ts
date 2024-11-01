import { Component } from '@angular/core';

@Component({
  selector: 'app-rexton',
  templateUrl: './rexton.component.html',
  styleUrls: ['./rexton.component.css']
})
export class RextonComponent {
  ids: number[] = [1, 2, 3, 4, 5, 6];
  routerLinks: string[] = [];

  constructor() {
    this.routerLinks = this.ids.map(id => `/voiture/ssangyong/rexton/pieces/${id}`);
  }
}
