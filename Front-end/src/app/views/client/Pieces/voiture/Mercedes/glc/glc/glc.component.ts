import { Component } from '@angular/core';

@Component({
  selector: 'app-glc',
  templateUrl: './glc.component.html',
  styleUrls: ['./glc.component.css']
})
export class GlcComponent {
  ids: number[] = [1, 2, 3, 4, 5, 6];
  routerLinks: string[] = [];

  constructor() {
    this.routerLinks = this.ids.map(id => `/client/voiture/mercedes/glc/pieces/${id}`);
  }
}
