import { Component } from '@angular/core';

@Component({
  selector: 'app-sorento',
  templateUrl: './sorento.component.html',
  styleUrls: ['./sorento.component.css']
})
export class SorentoComponent {
  ids: number[] = [1, 2, 3, 4, 5, 6];
  routerLinks: string[] = [];

  constructor() {
    this.routerLinks = this.ids.map(id => `/voiture/kia/sorento/pieces/${id}`);
  }
}
