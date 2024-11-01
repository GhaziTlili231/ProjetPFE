import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  private apiUrl = 'http://localhost:3000'; // URL de l'API

  constructor(private http: HttpClient) {}

  // Fonctions pour les pièces
  getPieces(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/pieces`);
  }

  supprimerPiece(id: number): Observable<any> {
    const url = `${this.apiUrl}/pieces/${id}`;
    return this.http.delete(url);
  }

  updatePiece(piece: any): Observable<any> {
    const url = `${this.apiUrl}/pieces/${piece.id}`;
    return this.http.put<any>(url, piece);
  }

  ajouterPiece(piece: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/pieces`, piece);
  }

  // Fonctions pour les administrateurs
  getAdmins(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/admin`);
  }

  deleteAdmin(id: number): Observable<any> {
    const url = `${this.apiUrl}/admin/${id}`;
    return this.http.delete(url);
  }

  updateAdmin(admin: any): Observable<any> {
    const url = `${this.apiUrl}/admin/${admin.id}`;
    return this.http.put<any>(url, admin);
  }

  addAdmin(admin: any): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    return this.http.post<any>(`${this.apiUrl}/admin`, admin, httpOptions);
  }

  // Fonction de vérification des identifiants
  verifierIdentifiants(email: string, motDePasse: string): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/admin/verifier`, { adresse_mail: email, mot_de_passe: motDePasse });
  }

  // Fonctions pour les clients
  getClients(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/clients`);
  }

  supprimerClient(id: number): Observable<any> {
    const url = `${this.apiUrl}/clients/${id}`;
    return this.http.delete(url);
  }

  updateClient(client: any): Observable<any> {
    const url = `${this.apiUrl}/clients/${client.id}`;
    return this.http.put<any>(url, client);
  }

  ajouterClient(client: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/clients`, {
      prenom: client.prenom,
      nom: client.nom,
      adresse_mail: client.adresse_mail,
      mot_de_passe: client.mot_de_passe,
      ville: client.ville,
      adresse: client.adresse,
      zip: client.zip,
      date_de_naissance: client.date_de_naissance,
      genre: client.genre
    });
  }
  
  getAchats(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/achat`);
  }
  supprimerAchat(id: number): Observable<any> {
    const url = `${this.apiUrl}/achat/${id}`;
    return this.http.delete(url);
  }

  updateAchat(achat: any): Observable<any> {
    const url = `${this.apiUrl}/achat/${achat.id}`;
    return this.http.put<any>(url, achat);
  }

  ajouterAchat(achat: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/achat`, achat);
  }

}
