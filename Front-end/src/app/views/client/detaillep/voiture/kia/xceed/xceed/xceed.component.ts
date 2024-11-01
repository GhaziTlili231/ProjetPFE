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
  image: string;
  quantity: number;
  marque: string;
}

@Component({
  selector: 'app-xceed',
  templateUrl: './xceed.component.html',
  styleUrls: ['./xceed.component.css']
})
export class XceedComponent implements OnInit {
  errorMessage: string | null = null;

  products: Product[] = [];
  filteredProducts: Product[] = [];
  routerLinks: string[] = [
    '/xceed/1',
    '/xceed/2',
    '/xceed/3',
    '/xceed/4',
    '/xceed/5',
    '/xceed/6'
  ];

  constructor(private route: ActivatedRoute, private clientService: ClientService) { }

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
      { id: 1, name: 'Filtre d\'air', description: 'Le filtre d\'air de haute qualité pour votre Kia XCeed garantit une performance optimale en filtrant efficacement l\'air entrant dans le moteur. Avec sa conception robuste et sa construction de qualité, ce filtre assure une protection maximale du moteur contre les particules de poussière et autres contaminants. Son installation facile et sa durabilité en font un choix idéal pour maintenir les performances et l\'efficacité de votre véhicule.', price: 30, type: 'filtre_huile', image: 'assets/imgs/fag6.avif', quantity: 1, marque: 'XCeed' },
      { id: 2, name: 'Filtre de huile', description: 'Le filtre à huile de qualité supérieure pour votre Kia XCeed garantit une filtration efficace de l\'huile moteur, assurant ainsi une protection maximale du moteur contre les impuretés. Sa conception robuste et sa construction de qualité en font un choix idéal pour maintenir les performances et la durabilité de votre moteur.', price: 35, type: 'filtre_air', image: 'assets/imgs/fhg6.jpeg', quantity: 1, marque: 'XCeed' },
      { id: 3, name: 'Plaquettes de freins', description: 'Les plaquettes de frein de haute qualité pour votre Kia XCeed offrent une performance de freinage exceptionnelle et une durabilité accrue. Avec leur conception avancée et leur matériau de friction de qualité, ces plaquettes assurent un freinage efficace et sûr, même dans des conditions extrêmes.', price: 250, type: 'plaquettes_freins', image: 'assets/imgs/pg7.jfif', quantity: 1, marque: 'XCeed' },
      { id: 4, name: 'Bougie', description: 'Les bougies d\'allumage de haute qualité pour votre Kia XCeed assurent une combustion efficace du mélange air-carburant dans le moteur, garantissant ainsi des performances optimales et une consommation réduite de carburant. Leur conception robuste et leur fabrication de qualité en font un choix idéal pour maintenir les performances et l\'efficacité de votre moteur.', price: 45, type: 'bougie', image: 'assets/imgs/bougieg6.jpg', quantity: 1, marque: 'XCeed' },
      { id: 5, name: 'Batterie', description: 'La batterie de haute qualité pour votre Kia XCeed assure une alimentation électrique fiable pour démarrer votre moteur et alimenter les accessoires électriques de votre véhicule. Avec sa conception robuste et sa longue durée de vie, cette batterie est un choix idéal pour assurer le bon fonctionnement de votre véhicule.', price: 200, type: 'batterie', image: 'assets/imgs/bg6.jfif', quantity: 1, marque: 'XCeed' },
      { id: 6, name: 'Pneu', description: 'Le pneu de haute qualité pour votre Kia XCeed assure une conduite confortable et sûre, même sur les routes les plus difficiles. Avec sa construction solide et sa conception soignée, ce pneu offre une excellente adhérence et une durabilité exceptionnelle pour une expérience de conduite optimale.', price: 250, type: 'roue', image: 'assets/imgs/pneug7.webp', quantity: 1, marque: 'XCeed' }
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
