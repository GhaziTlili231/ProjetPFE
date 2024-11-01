import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UtilisateurService } from '../../utilisateur.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inscrireutulisateur',
  templateUrl: './inscrireutulisateur.component.html',
  styleUrls: ['./inscrireutulisateur.component.css']
})
export class InscrireutulisateurComponent implements OnInit {
  hide = true;
  registerForm!: FormGroup;

  constructor(private fb: FormBuilder, private utilisateurService: UtilisateurService, private router: Router) { }

  ngOnInit(): void {
    this.registerForm = this.fb.group({
      'prenom': [null, Validators.required],
      'nom': [null, Validators.required],
      'adresse_mail': [null, Validators.compose([Validators.required, Validators.email])],
      'mot_de_passe': [null, Validators.required],
      'motDePasse': [null, Validators.required],
      'ville': [null, Validators.required],
      'adresse': [null, Validators.required],
      'zip': [null, Validators.required],
      'genre': [null, Validators.required],
      'date_de_naissance': [null, Validators.required],
    });
  }

  submit() {
    if (!this.validateForm()) {
      this.router.navigateByUrl('/inscrireutulisateur'); // Rediriger vers la page d'inscription en cas d'erreur
      return;
    }
  
    this.utilisateurService.register(this.registerForm.value).subscribe((response: any) => {
      this.router.navigateByUrl('/loginutulisateur'); // Rediriger vers la page client après la soumission du formulaire
    });
  }
  

  validateForm(): boolean {
    const prenom = this.registerForm.get('prenom')?.value;
    const nom = this.registerForm.get('nom')?.value;
    const email = this.registerForm.get('adresse_mail')?.value;
    const password = this.registerForm.get('mot_de_passe')?.value;
    const confirmPassword = this.registerForm.get('motDePasse')?.value;

    // Vérifier si les champs sont vides
    if (!prenom || !nom || !email || !password || !confirmPassword) {
      alert('Veuillez remplir tous les champs');
      return false;
    }

    // Vérifier si l'email est valide
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert('Veuillez saisir une adresse email valide');
      return false;
    }

    // Vérifier si les mots de passe sont identiques
    if (password !== confirmPassword) {
      alert('Les mots de passe ne correspondent pas');
      return false;
    }

    return true;
  }
}
