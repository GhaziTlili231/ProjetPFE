import { Component } from '@angular/core';

@Component({
  selector: 'app-tmax',
  templateUrl: './tmax.component.html',
  styleUrls: ['./tmax.component.css']
})
export class TmaxComponent {
  ids: number[] = [1, 2, 3, 4, 5, 6];
  routerLinks: string[] = [];

  constructor() {
    this.routerLinks = this.ids.map(id => `/client/moto/yamaha/tmax/pieces/${id}`);
  }
}
