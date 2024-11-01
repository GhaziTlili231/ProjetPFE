import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class InscrireUtilisateurService {

  constructor(private http: HttpClient) { }

  inscrireUtilisateur(utilisateur: any) {
    return this.http.post('http://localhost:3000/utilisateur', utilisateur);
  }

}
