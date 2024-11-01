import { Component } from '@angular/core';

@Component({
  selector: 'app-fabia',
  templateUrl: './fabia.component.html',
  styleUrls: ['./fabia.component.css']
})
export class FabiaComponent {
  ids: number[] = [1, 2, 3, 4, 5, 6];
    routerLinks: string[] = [];
  
    constructor() {
      this.routerLinks = this.ids.map(id => `/voiture/skoda/fabia/pieces/${id}`);
    }
}
