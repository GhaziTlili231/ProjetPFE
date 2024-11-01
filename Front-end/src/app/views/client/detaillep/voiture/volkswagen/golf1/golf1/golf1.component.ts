import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { ClientService } from '../../../../../client.service';

interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  type: string;
  image: string; // Chemin d'accès à l'image
  quantity: number;
  marque: string; // Marque du produit
  
}

@Component({
  selector: 'app-golf1',
  templateUrl: './golf1.component.html',
  styleUrls: ['./golf1.component.css']
})
export class Golf1Component implements OnInit {
  errorMessage: string | null = null;

  products: Product[] = []; // Liste de tous les produits
  filteredProducts: Product[] = []; // Liste des produits filtrés
  type: string = ''; // Type de produit à afficher

  constructor(private route: ActivatedRoute, private http: HttpClient, private clientService: ClientService) { }

  ngOnInit(): void {
    this.products = this.getProducts();
    this.route.paramMap.subscribe(params => {
      const typeId = Number(params.get('id'));
      this.filteredProducts = this.products.filter(product => product.id === typeId);
      this.filteredProducts.forEach(product => product.quantity = 1); // Initialiser la quantité à 1 pour tous les produits
    });
  }

  getProducts(): Product[] {
    return [
      { id: 1, name: 'Golf1 Filtre d\'air', description: 'Le filtre d\'air de haute qualité pour votre Golf1 garantit une performance optimale en filtrant efficacement l\'air entrant dans le moteur. Avec sa conception robuste et sa construction de qualité, ce filtre assure une protection maximale du moteur contre les particules de poussière et autres contaminants. Son installation facile et sa durabilité en font un choix idéal pour maintenir les performances et l\'efficacité de votre véhicule.', price: 25, type: 'filtre_huile', image: 'assets/imgs/filtreag1g2.jpg', quantity: 1, marque: 'Golf1' },
      { id: 2, name: 'Golf1 Filtre à huile', description: 'Le filtre à huile de qualité supérieure pour votre Golf1 garantit une filtration efficace de l\'huile moteur, assurant ainsi une protection maximale du moteur contre les impuretés. Sa conception robuste et sa construction de qualité en font un choix idéal pour maintenir les performances et la durabilité de votre moteur.', price: 25, type: 'filtre_air', image: 'assets/imgs/fhg1g2.jpg', quantity: 1, marque: 'Golf1' },
      { id: 3, name: 'Golf1 Plaquettes de freins', description: 'Les plaquettes de frein de haute qualité pour votre Golf1 offrent une performance de freinage exceptionnelle et une durabilité accrue. Avec leur conception avancée et leur matériau de friction de qualité, ces plaquettes assurent un freinage efficace et sûr, même dans des conditions extrêmes.', price: 100, type: 'plaquettes_freins', image: 'assets/imgs/pg1g2.jpg', quantity: 1, marque: 'Golf1' },
      { id: 4, name: 'Golf1 Bougie', description: 'Les bougies d\'allumage de haute qualité pour votre Golf1 assurent une combustion efficace du mélange air-carburant dans le moteur, garantissant ainsi des performances optimales et une consommation réduite de carburant. Leur conception robuste et leur fabrication de qualité en font un choix idéal pour maintenir les performances et l\'efficacité de votre moteur.', price: 25, type: 'bougie', image: 'assets/imgs/bougieg1g2.jpg', quantity: 1, marque: 'Golf1' },
      { id: 5, name: 'Golf1 Batterie', description: 'La batterie de haute qualité pour votre Golf1 assure une alimentation électrique fiable pour démarrer votre moteur et alimenter les accessoires électriques de votre véhicule. Avec sa conception robuste et sa longue durée de vie, cette batterie est un choix idéal pour assurer le bon fonctionnement de votre véhicule.', price: 110, type: 'batterie', image: 'assets/imgs/bg1.jfif', quantity: 1, marque: 'Golf1' },
      { id: 6, name: 'Golf1 Pneu', description: 'La pneu de haute qualité pour votre Golf1 assure une conduite confortable et sûre, même sur les routes les plus difficiles. Avec sa construction solide et sa conception soignée, cette roue offre une excellente adhérence et une durabilité exceptionnelle pour une expérience de conduite optimale.', price: 150, type: 'roue', image: 'assets/imgs/pneug1.jpg', quantity: 1, marque: 'Golf1' },
    ];
  }

  addToCart(product: Product): void {
    if (!product || !product.name || !product.marque || !product.quantity || !product.price|| !product.image) {
      console.error('Missing required fields in request body');
      this.errorMessage = 'Missing required fields in request body';
      return;
    }
  
    this.clientService.addToCart(product).subscribe(
      () => {
        console.log('Added to cart');
        this.errorMessage = null;
      },
      (error) => {
        console.error('Error adding to cart:', error);
        this.errorMessage = 'Error adding to cart. Please try again.';
      }
    );
  }
  

}

