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
  selector: 'app-symbole',
  templateUrl: './symbole.component.html',
  styleUrls: ['./symbole.component.css']
})
export class SymboleComponent implements OnInit {
  errorMessage: string | null = null;

  products: Product[] = [];
  filteredProducts: Product[] = [];
  routerLinks: string[] = [
    '/symbole/1', // Filtre d'air
    '/symbole/2', // Filtre de huile
    '/symbole/3', // Plaquettes de freins
    '/symbole/4', // Bougie
    '/symbole/5', // Batterie
    '/symbole/6'  // Pneu
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
      { id: 1, name: 'Filtre d air', description: 'Description du filtre d\'air pour la Clio 3', price: 25, type: 'filtre_huile', image:' assets/imgs/fag6.avif', quantity: 1 },
      { id: 2, name: 'Filtre de huile', description: 'Description du filtre de huile pour la Clio 3', price: 30, type: 'filtre_air', image: 'assets/imgs/fhg6.jpeg', quantity: 1 },
      { id: 3, name: 'Plaquettes de freins', description: 'Description des plaquettes de freins pour la Clio 3', price: 30, type: 'plaquettes_freins', image: 'assets/imgs/pg7.jfif', quantity: 1 },
      { id: 4, name: 'Bougie', description: 'Description de la bougie pour la Clio 3', price: 10, type: 'bougie', image: 'assets/imgs/bougieg6.jpg', quantity: 1 },
      { id: 5, name: 'Batterie', description: 'Description de la batterie pour la Clio 3', price: 100, type: 'batterie', image: 'assets/imgs/bg6.jfif', quantity: 1 },
      { id: 6, name: 'Pneu', description: 'Description du pneu pour la Clio 3', price: 150, type: 'roue', image: 'assets/imgs/pneug7.webp', quantity: 1 }
    ];
  }

  addToCart(product: Product): void {
    this.errorMessage = 'Vous devez être connecté pour ajouter des produits au panier.';
  }
}
