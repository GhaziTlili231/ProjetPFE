import { Component, OnInit } from '@angular/core';
import { ClientService } from '../../../client/client.service';

interface CartItem {
  id: number;
  nom: string;
  marque: string;
  nombre: number;
  prix: number;
  piece: string;
  image: string;
  date_achat: string; // Ajout de date_achat de type string
}

@Component({
  selector: 'app-achat',
  templateUrl: './achat.component.html',
  styleUrls: ['./achat.component.css']
})
export class AchatComponent implements OnInit {
  cartItems: CartItem[] = [];
  totalPrix: number = 0;
  showForm: boolean = false;
  ville: string = '';
  adresse: string = '';
  telephone: string = '';
  formulaireComplet: boolean = false;
  adresse_mail: string = '';
  mot_de_passe: string = '';

  constructor(private clientService: ClientService) { }

  ngOnInit(): void {
    this.getAchatItems();
  }

  getAchatItems(): void {
    this.clientService.getAchatItems().subscribe(
        (data) => {
            this.cartItems = data.map((item: CartItem) => ({
                ...item,
                date_achat: this.formatDate(item.date_achat) // Formater la date d'achat
            }));
            this.calculateTotalPrice();
        },
        (error) => {
            console.error('Error fetching cart items:', error);
        }
    );
}


  calculateTotalPrice(): void {
    this.totalPrix = this.cartItems.reduce((acc, item) => acc + (item.prix * item.nombre), 0) + 8;
  }
  formatDate(dateString: string): string {
    const date = new Date(dateString);
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
}

  
}
