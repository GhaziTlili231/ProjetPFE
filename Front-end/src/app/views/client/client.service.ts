// client.service.ts

import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  private apiUrl = 'http://localhost:3000'; // Make sure this is the correct URL for your API

  constructor(private http: HttpClient) { }
  
  

  getClientInfo(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/profil`);
  }

  updateClientInfo(clientInfo: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/profil`, clientInfo);
  }
  addToCart(product: { quantity: number; name: string; price: number; marque: string; image: string }): Observable<any> {
    if (!product || !product.name || !product.marque || !product.quantity || !product.price || !product.image) {
      throw new Error('Missing required fields in product object');
    }
    
    const { name, marque, quantity, price, image } = product;
    const data = { name, marque, stock: quantity, prix: price, image }; // Utilisation des noms de champs compatibles avec le serveur
    return this.http.put<any>(`${this.apiUrl}/add-to-cart`, data);
  }

getCartItems(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/panier`);
}
deleteCartItem(id: number): Observable<any> {
  return this.http.delete<any>(`${this.apiUrl}/panier/${id}`);
}

chatbotMessage(message: string): Observable<any> {
  const headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': 'Bearer YOUR_DIALOGFLOW_ACCESS_TOKEN'
    
  });

  const requestBody = {
    queryInput: {
      text: {
        text: message,
        languageCode: 'fr'
      }
    }
  };

  return this.http.post('https://dialogflow.googleapis.com/v2/projects/YOUR_PROJECT_ID/agent/sessions/YOUR_SESSION_ID:detectIntent', requestBody, { headers });
}

passerCommande(adresse_mail: string, mot_de_passe: string, ville: string, adresse: string, telephone: string, paiement: string): Observable<any> {
  return this.http.post<any>(`${this.apiUrl}/passer-commande`, { adresse_mail, mot_de_passe, ville, adresse, telephone, paiement });
}


getAchatItems(): Observable<any> {
  return this.http.get<any>(`${this.apiUrl}/achat`);
}

}
