import { Component } from '@angular/core';

@Component({
  selector: 'app-passat',
  templateUrl: './passat.component.html',
  styleUrls: ['./passat.component.css']
})
export class PassatComponent {
  ids: number[] = [1, 2, 3, 4, 5, 6];
  routerLinks: string[] = [];

  constructor() {
    this.routerLinks = this.ids.map(id => `/client/voiture/volkswagen/passat/pieces/${id}`);
  }
}
