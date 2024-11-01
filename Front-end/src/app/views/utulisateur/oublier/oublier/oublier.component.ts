import { Component } from '@angular/core';

@Component({
  selector: 'app-oublier',
  templateUrl: './oublier.component.html',
  styleUrls: ['./oublier.component.css']
})
export class OublierComponent {
  messageVisible = false;

  afficherMessage(event: Event) {
    event.preventDefault();
    this.messageVisible = true;
  }
}
