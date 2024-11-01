import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  type: string;
  image: string;
  quantity: number;
}

@Component({
  selector: 'app-x4',
  templateUrl: './x4.component.html',
  styleUrls: ['./x4.component.css']
})
export class X4Component implements OnInit {
  errorMessage: string | null = null;

  products: Product[] = [];
  filteredProducts: Product[] = [];
  routerLinks: string[] = [
    '/x4/1', // Filtre d'air
    '/x4/2', // Filtre de huile
    '/x4/3', // Plaquettes de freins
    '/x4/4', // Bougie
    '/x4/5', // Batterie
    '/x4/6'  // Pneu
  ];

  constructor(private route: ActivatedRoute) { }

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
      { id: 1, name: 'Filtre d\'air', description: 'Le filtre d\'air de haute qualité pour votre voiture garantit une performance optimale en filtrant efficacement l\'air entrant dans le moteur. Avec sa conception robuste et sa construction de qualité, ce filtre assure une protection maximale du moteur contre les particules de poussière et autres contaminants. Son installation facile et sa durabilité en font un choix idéal pour maintenir les performances et l\'efficacité de votre véhicule.', price: 60, type: 'filtre_huile', image: 'assets/imgs/fax1.webp', quantity: 1 },
      { id: 2, name: 'Filtre de huile', description: 'Le filtre à huile de qualité supérieure pour votre voiture garantit une filtration efficace de l\'huile moteur, assurant ainsi une protection maximale du moteur contre les impuretés. Sa conception robuste et sa construction de qualité en font un choix idéal pour maintenir les performances et la durabilité de votre moteur.', price: 60, type: 'filtre_air', image: 'assets/imgs/fhg8.jfif', quantity: 1 },
      { id: 3, name: 'Plaquettes de freins', description: 'Les plaquettes de frein de haute qualité pour votre voiture offrent une performance de freinage exceptionnelle et une durabilité accrue. Avec leur conception avancée et leur matériau de friction de qualité, ces plaquettes assurent un freinage efficace et sûr, même dans des conditions extrêmes.', price: 210, type: 'plaquettes_freins', image: 'assets/imgs/px1.jfif', quantity: 1 },
      { id: 4, name: 'Bougie', description: 'Les bougies d\'allumage de haute qualité pour votre voiture assurent une combustion efficace du mélange air-carburant dans le moteur, garantissant ainsi des performances optimales et une consommation réduite de carburant. Leur conception robuste et leur fabrication de qualité en font un choix idéal pour maintenir les performances et l\'efficacité de votre moteur.', price: 70, type: 'bougie', image: 'assets/imgs/bougiex1.jfif', quantity: 1 },
      { id: 5, name: 'Batterie', description: 'La batterie de haute qualité pour votre voiture assure une alimentation électrique fiable pour démarrer votre moteur et alimenter les accessoires électriques de votre véhicule. Avec sa conception robuste et sa longue durée de vie, cette batterie est un choix idéal pour assurer le bon fonctionnement de votre véhicule.', price: 230, type: 'batterie', image: 'assets/imgs/bx1.jpg', quantity: 1 },
      { id: 6, name: 'Pneu', description: 'La pneu de haute qualité pour votre voiture assure une conduite confortable et sûre, même sur les routes les plus difficiles. Avec sa construction solide et sa conception soignée, cette roue offre une excellente adhérence et une durabilité exceptionnelle pour une expérience de conduite optimale.', price: 250, type: 'roue', image: 'assets/imgs/px3.png', quantity: 1 }
    ];
  }

  addToCart(product: Product): void {
    this.errorMessage = 'Vous devez être connecté pour ajouter des produits au panier.';
  }
}
