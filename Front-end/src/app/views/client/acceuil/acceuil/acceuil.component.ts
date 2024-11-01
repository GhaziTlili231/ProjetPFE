import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; // Import du service Router

interface Marque {
  nom: string;
  modeles: string[];
}

interface MarquesModeles {
  [key: string]: Marque;
}

@Component({
  selector: 'app-acceuil',
  templateUrl: './acceuil.component.html',
  styleUrls: ['./acceuil.component.css']
})
export class AcceuilComponent implements OnInit {
  selectedMarque: string = 'default';
  selectedModele: string = 'default';
  modeles: string[] = [];
  marques: string[];

  marquesModeles: MarquesModeles = {
    Volkswagen: {
      nom: 'Volkswagen',
      modeles: ['golf1', 'golf2', 'golf3','golf4','golf5','golf6','golf7','golf8','amarok','passat','jeta','tiguan','touareg']
    },
    BMW: {
      nom: 'BMW',
      modeles: ['x1', 'x2', 'x3', 'x4','x5','serie6']
    },
    Mercedes: {
      nom: 'Mercedes',
      modeles: ['classe-g', 'classe-s', 'classe-a','gla','glc']
    },
    Seat: {
      nom: 'Seat',
      modeles: ['ibiza', 'leon', 'arona','ateca']
    },
    Skoda: {
      nom: 'Skoda',
      modeles: ['fabia', 'kodiaq', 'kushaq','superb']
    },
    Renault: {
      nom: 'Renault',
      modeles: ['symbole', 'cliodynamique', 'clio3','cliocampus','megane']
    },
    Peugeot: {
      nom: 'Peugeot',
      modeles: ['206', '308', '408','3008']
    },
    Fiat: {
      nom: 'Fiat',
      modeles: ['tipo', 'panda', '500','punto','fiorino']
    },
    Kia: {
      nom: 'Kia',
      modeles: ['rio', 'sportage', 'xceed','sorento',]
    },
    
    Audi: {
      nom: 'Audi',
      modeles: ['a3', 'a4', 'a6','q5']
    },
    Citoren: {
      nom: 'Citoren',
      modeles: ['c3', 'c5', 'celysee','berlingo']
    },
    Hyundai: {
      nom: 'Hyundai',
      modeles: ['i10', 'i20']
    },
    Honda: {
      nom: 'Honda',
      modeles: ['city', 'crv']
    },
    Ssangyong: {
      nom: 'Ssangyong',
      modeles: ['korando', 'rexton','musso','trivoli']
    },
    Yamaha: {
      nom: 'Yamaha',
      modeles: ['tmax', 'mt03']
    },
    kawasaki: {
      nom: 'Kawasaki',
      modeles: ['z1000', 'z750']
    },
  };

  constructor(private router: Router) { // Injection du service Router
    this.marques = Object.keys(this.marquesModeles);
  }

  ngOnInit() {
    this.showSlides();
  }

  showSlides() {
    let slideIndex = 0;
    const slides = document.getElementsByClassName("mySlides") as HTMLCollectionOf<HTMLElement>;
    
    function nextSlide() {
      for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
      }
      slideIndex++;
      if (slideIndex > slides.length) {slideIndex = 1}    
      slides[slideIndex-1].style.display = "block";  
      setTimeout(nextSlide, 5000); // Change image every 5 seconds
    }

    nextSlide();
  }

  updateModele() {
    if (this.selectedMarque !== 'default') {
      this.modeles = this.marquesModeles[this.selectedMarque].modeles;
    } else {
      this.modeles = [];
    }
  }

 rechercher(): void {
  if (this.selectedMarque !== 'default' && this.selectedModele !== 'default') {
    let marqueLower = this.selectedMarque.toLowerCase();
    let modeleLower = this.selectedModele.toLowerCase();

    let urlPrefix = 'client/voiture'; // Préfixe par défaut pour les autres marques

    if (marqueLower === 'yamaha' || marqueLower === 'kawasaki') {
      urlPrefix = 'client/moto'; // Utiliser "moto" comme préfixe pour Yamaha et Kawasaki
    }

    const url = `${urlPrefix}/${marqueLower}/${modeleLower}`;
    // Rediriger vers la page avec l'URL construit
    this.router.navigateByUrl(url);
  }
}

  
  
  
  
  
  

}
