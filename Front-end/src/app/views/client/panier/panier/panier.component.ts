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
}

@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.css']
})
export class PanierComponent implements OnInit {
  cartItems: CartItem[] = [];
  totalPrix: number = 0;
  showForm: boolean = false;
  ville: string = '';
  adresse: string = '';
  telephone: string = '';
  paiement: string = '';

  formulaireComplet: boolean = false;
  adresse_mail: string = '';
  mot_de_passe: string = '';

  constructor(private clientService: ClientService) { }

  ngOnInit(): void {
    this.getCartItems();
  }

  getCartItems(): void {
    this.clientService.getCartItems().subscribe(
      (data) => {
        this.cartItems = data;
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

  deleteItem(id: number): void {
    this.clientService.deleteCartItem(id).subscribe(
      () => {
        console.log('Item deleted');
        this.getCartItems(); // Actualiser la liste des articles après la suppression
      },
      (error) => {
        console.error('Error deleting item:', error);
      }
    );
  }

  toggleForm(): void {
    this.showForm = !this.showForm;
  }

  onSubmit(): void {
    // Logique pour soumettre le formulaire (par exemple, envoyer des données au serveur)
    console.log('Form submitted');
  }

  passerCommande(): void {
    const { adresse_mail, mot_de_passe, ville, adresse, telephone, paiement } = this;
    this.clientService.passerCommande(adresse_mail, mot_de_passe, ville, adresse, telephone, paiement).subscribe(
      () => {
        console.log('Commande passée avec succès !');
        // Réinitialiser les valeurs des champs après la commande
        this.ville = '';
        this.adresse = '';
        this.telephone = '';
        this.paiement='';
        this.showForm = false; // Cacher le formulaire après la commande
        // Rafraîchir la page
        window.location.reload();
      },
      (error) => {
        console.error('Erreur lors de la commande :', error);
        if (error.error instanceof ErrorEvent) {
          // Erreur côté client
          console.error('Une erreur s\'est produite :', error.error.message);
        } else {
          // Erreur côté serveur
          console.error(`Code d'erreur côté serveur : ${error.status}, ` + `message : ${error.message}`);
          console.error('Réponse complète du serveur :', error.error);
          if (error.error === 'Email ou mot de passe incorrect.') {
            // Afficher le message d'erreur côté client
            alert('Email ou mot de passe incorrect.');
          }
        }
      }
    );
}

  


}
