import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ClientService } from '../../../../../client.service'; // Assurez-vous d'importer le service ClientService

interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  type: string;
  image: string;
  quantity: number;
  marque: string;
}

@Component({
  selector: 'app-tmax',
  templateUrl: './tmax.component.html',
  styleUrls: ['./tmax.component.css']
})
export class TmaxComponent implements OnInit {
  errorMessage: string | null = null;

  products: Product[] = [];
  filteredProducts: Product[] = [];
  routerLinks: string[] = [
    '/tmax/1', // Filtre d'air
    '/tmax/2', // Filtre de huile
    '/tmax/3', // Plaquettes de freins
    '/tmax/4', // Bougie
    '/tmax/5', // Batterie
    '/tmax/6'  // Pneu
  ];

  constructor(private route: ActivatedRoute, private clientService: ClientService) { } // Injection du service ClientService

  ngOnInit(): void {
    this.products = this.getProducts();
    this.route.paramMap.subscribe(params => {
      const typeId = Number(params.get('id'));
      this.filteredProducts = this.products.filter(product => product.id === typeId);
      this.filteredProducts.forEach(product => product.quantity = 1);
    });
  }

  getProducts(): Product[] {
    return [
      { id: 1, name: 'Filtre d air', description: 'Le filtre d\'air de haute qualité pour votre moto garantit une performance optimale en filtrant efficacement l\'air entrant dans le moteur. Avec sa conception robuste et sa construction de qualité, ce filtre assure une protection maximale du moteur contre les particules de poussière et autres contaminants. Son installation facile et sa durabilité en font un choix idéal pour maintenir les performances et l\'efficacité de votre moto.', price: 50, type: 'filtre_huile', image:'assets/imgs/fay.jfif', quantity: 1, marque: 'Tmax' },
      { id: 2, name: 'Filtre de huile', description: 'Le filtre à huile de qualité supérieure pour votre moto garantit une filtration efficace de l\'huile moteur, assurant ainsi une protection maximale du moteur contre les impuretés. Sa conception robuste et sa construction de qualité en font un choix idéal pour maintenir les performances et la durabilité de votre moteur.', price: 50, type: 'filtre_air', image: 'assets/imgs/fhy.jpg', quantity: 1, marque: 'Tmax' },
      { id: 3, name: 'Plaquettes de freins', description: 'Les plaquettes de frein de haute qualité pour votre moto offrent une performance de freinage exceptionnelle et une durabilité accrue. Avec leur conception avancée et leur matériau de friction de qualité, ces plaquettes assurent un freinage efficace et sûr, même dans des conditions extrêmes.', price: 150, type: 'plaquettes_freins', image: 'assets/imgs/py.jfif', quantity: 1, marque: 'Tmax' },
      { id: 4, name: 'Bougie', description: 'Les bougies d\'allumage de haute qualité pour votre moto assurent une combustion efficace du mélange air-carburant dans le moteur, garantissant ainsi des performances optimales et une consommation réduite de carburant. Leur conception robuste et leur fabrication de qualité en font un choix idéal pour maintenir les performances et l\'efficacité de votre moteur.', price: 50, type: 'bougie', image: 'assets/imgs/bougiey.jpg', quantity: 1, marque: 'Tmax' },
      { id: 5, name: 'Batterie', description: 'La batterie de haute qualité pour votre moto assure une alimentation électrique fiable pour démarrer votre moteur et alimenter les accessoires électriques de votre véhicule. Avec sa conception robuste et sa longue durée de vie, cette batterie est un choix idéal pour assurer le bon fonctionnement de votre véhicule.', price: 100, type: 'batterie', image: 'assets/imgs/by.jfif', quantity: 1, marque: 'Tmax' },
      { id: 6, name: 'Pneu', description: 'La pneu de haute qualité pour votre moto assure une conduite confortable et sûre, même sur les routes les plus difficiles. Avec sa construction solide et sa conception soignée, cette roue offre une excellente adhérence et une durabilité exceptionnelle pour une expérience de conduite optimale.', price: 150, type: 'roue', image: 'assets/imgs/pneuy.webp', quantity: 1, marque: 'Tmax' }
    ];
  }

  addToCart(product: Product): void {
    if (!product || !product.name || !product.marque || !product.quantity || !product.price || !product.image) {
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
