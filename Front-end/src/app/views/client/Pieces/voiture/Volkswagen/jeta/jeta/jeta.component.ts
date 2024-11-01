import { Component } from '@angular/core';

@Component({
  selector: 'app-jeta',
  templateUrl: './jeta.component.html',
  styleUrls: ['./jeta.component.css']
})
export class JetaComponent {
  ids: number[] = [1, 2, 3, 4, 5, 6];
  routerLinks: string[] = [];

  constructor() {
    this.routerLinks = this.ids.map(id => `/client/voiture/volkswagen/jeta/pieces/${id}`);
  }
}
