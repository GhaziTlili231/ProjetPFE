import { Component } from '@angular/core';

@Component({
  selector: 'app-cliodynamque',
  templateUrl: './cliodynamque.component.html',
  styleUrls: ['./cliodynamque.component.css']
})
export class CliodynamqueComponent {
  ids: number[] = [1, 2, 3, 4, 5, 6];
  routerLinks: string[] = [];

  constructor() {
    this.routerLinks = this.ids.map(id => `/client/voiture/renault/cliodynamique/pieces/${id}`);
  }
}
