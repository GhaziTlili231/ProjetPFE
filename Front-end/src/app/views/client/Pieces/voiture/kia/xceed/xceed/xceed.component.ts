import { Component } from '@angular/core';

@Component({
  selector: 'app-xceed',
  templateUrl: './xceed.component.html',
  styleUrls: ['./xceed.component.css']
})
export class XceedComponent {
  ids: number[] = [1, 2, 3, 4, 5, 6];
  routerLinks: string[] = [];

  constructor() {
    this.routerLinks = this.ids.map(id => `/client/voiture/kia/xceed/pieces/${id}`);
  }
}
