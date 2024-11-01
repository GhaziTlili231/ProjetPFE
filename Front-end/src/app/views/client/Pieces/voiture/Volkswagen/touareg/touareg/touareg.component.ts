import { Component } from '@angular/core';

@Component({
  selector: 'app-touareg',
  templateUrl: './touareg.component.html',
  styleUrls: ['./touareg.component.css']
})
export class TouaregComponent {
  ids: number[] = [1, 2, 3, 4, 5, 6];
  routerLinks: string[] = [];

  constructor() {
    this.routerLinks = this.ids.map(id => `/client/voiture/volkswagen/touareg/pieces/${id}`);
  }
}
