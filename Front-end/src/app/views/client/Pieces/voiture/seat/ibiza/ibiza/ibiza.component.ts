import { Component } from '@angular/core';

@Component({
  selector: 'app-ibiza',
  templateUrl: './ibiza.component.html',
  styleUrls: ['./ibiza.component.css']
})
export class IbizaComponent {
  ids: number[] = [1, 2, 3, 4, 5, 6];
  routerLinks: string[] = [];

  constructor() {
    this.routerLinks = this.ids.map(id => `/client/voiture/seat/ibiza/pieces/${id}`);
}
}
