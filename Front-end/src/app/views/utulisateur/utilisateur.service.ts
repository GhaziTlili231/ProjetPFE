import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UtilisateurService {
  private apiUrl = 'http://localhost:3000/utilisateur'; // Définir l'URL de l'API

  constructor(private http: HttpClient) { }

  register(registerForm: any){
    return this.http.post(`${this.apiUrl}/register`, registerForm);
  }
  
  login(loginForm: any){
    return this.http.post(`${this.apiUrl}/login`, loginForm);
  }

  updateProfile(userForm: any){
    return this.http.put(`${this.apiUrl}/profile`, userForm);
  }

  getComptesCreesAujourdhui() {
    return this.http.get<any>(`${this.apiUrl}/comptes-crees-aujourdhui`);
  }

  getPourcentageHommesEtFemmes() {
    return this.http.get<any>(`${this.apiUrl}/percentage-genre`);
  }

  getTranchesAges() {
    return this.http.get<any>(`${this.apiUrl}/tranches-ages`);
  }

  modifierClient(id: number, nouveauClient: any) {
    return this.http.put(`${this.apiUrl}/${id}`, nouveauClient);
  }

  updateClient(client: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${client.id}`, client);
  }

  updateUser(user: any): Observable<any> {
    return this.http.put<any>(`http://localhost:3000/clients/${user.id}`, user);
  }

  ajouterClient(piece: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, piece);
  }

  verifierIdentifiants(email: string, motDePasse: string): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/login`, { email, motDePasse });
  }
  inscrireUtilisateur(utilisateur: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/inscrire-utilisateur`, utilisateur);
  }
}
