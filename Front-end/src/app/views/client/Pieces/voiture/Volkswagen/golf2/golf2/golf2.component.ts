import { Component } from '@angular/core';

@Component({
  selector: 'app-golf2',
  templateUrl: './golf2.component.html',
  styleUrls: ['./golf2.component.css']
})
export class Golf2Component {
  ids: number[] = [1, 2, 3, 4, 5, 6];
  routerLinks: string[] = [];

  constructor() {
    this.routerLinks = this.ids.map(id => `/client/voiture/volkswagen/golf2/pieces/${id}`);
  }
}
