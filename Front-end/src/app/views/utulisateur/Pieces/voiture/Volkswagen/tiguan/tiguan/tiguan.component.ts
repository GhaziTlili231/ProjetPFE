import { Component } from '@angular/core';

@Component({
  selector: 'app-tiguan',
  templateUrl: './tiguan.component.html',
  styleUrls: ['./tiguan.component.css']
})
export class TiguanComponent {
  ids: number[] = [1, 2, 3, 4, 5, 6];
  routerLinks: string[] = [];

  constructor() {
    this.routerLinks = this.ids.map(id => `/voiture/volkswagen/tiguan/pieces/${id}`);
  }
}
