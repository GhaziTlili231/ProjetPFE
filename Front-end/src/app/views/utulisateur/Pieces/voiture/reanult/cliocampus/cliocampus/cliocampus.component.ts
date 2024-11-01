import { Component } from '@angular/core';

@Component({
  selector: 'app-cliocampus',
  templateUrl: './cliocampus.component.html',
  styleUrls: ['./cliocampus.component.css']
})
export class CliocampusComponent {
  ids: number[] = [1, 2, 3, 4, 5, 6];
  routerLinks: string[] = [];

  constructor() {
    this.routerLinks = this.ids.map(id => `/voiture/renault/cliocampus/pieces/${id}`);
  }
}
