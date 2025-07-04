import { Component, ViewChild, ElementRef } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { UtilisateurService } from '../../utilisateur.service'; // Assurez-vous que le chemin d'accès est correct
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './loginutulisateur.component.html',
  styleUrls: ['./loginutulisateur.component.css']
})
export class LoginutulisateurComponent {
  email: string;
  motDePasse: string;
  @ViewChild('exampleInputEmail1') emailInput!: ElementRef<HTMLInputElement>;
  @ViewChild('exampleInputPassword1') passwordInput!: ElementRef<HTMLInputElement>;
  message: string = '';

  constructor(private utilisateurService: UtilisateurService, private router: Router) {
    this.email = '';
    this.motDePasse = '';
  }

  connecter(event: Event): void {
    event.preventDefault(); // Empêcher le comportement par défaut du formulaire

    const email = this.emailInput.nativeElement.value;
    const motDePasse = this.passwordInput.nativeElement.value;

    if (!email || !motDePasse) {
      this.message = 'Veuillez saisir votre adresse e-mail et votre mot de passe.';
      return;
    }

    this.utilisateurService.verifierIdentifiants(email, motDePasse).subscribe(
      (response) => {
        if (response.success) {
          console.log('Connexion réussie');
          this.router.navigateByUrl('/client');
        } else {
          this.message = 'Adresse e-mail ou mot de passe incorrect';
        }
      },
      (error: HttpErrorResponse) => {
        if (error.status === 401) {
          this.message = 'Adresse e-mail ou mot de passe incorrect';
        } else if (error.status === 0) {
          this.message = 'Erreur de connexion au serveur. Veuillez réessayer plus tard.';
        } else {
          this.message = 'Erreur lors de la vérification des identifiants : ' + error.message;
        }
      }
    );
  }

}
