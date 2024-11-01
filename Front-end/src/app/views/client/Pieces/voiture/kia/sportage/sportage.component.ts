import { Component } from '@angular/core';

@Component({
  selector: 'app-sportage',
  templateUrl: './sportage.component.html',
  styleUrls: ['./sportage.component.css']
})
export class SportageComponent {
  ids: number[] = [1, 2, 3, 4, 5, 6];
  routerLinks: string[] = [];

  constructor() {
    this.routerLinks = this.ids.map(id => `/client/voiture/kia/sportage/pieces/${id}`);
  }
}
