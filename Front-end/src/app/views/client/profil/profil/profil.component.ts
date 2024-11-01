import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})
export class ProfilComponent implements OnInit {
  clientInfo: any;
  editing: boolean;

  constructor(private http: HttpClient) {
    this.clientInfo = {};
    this.editing = false;
  }

  ngOnInit(): void {
    this.getClientInfo();
  }

  getClientInfo(): void {
    this.http.get<any>('http://localhost:3000/profil').subscribe(
      (response) => {
        this.clientInfo = response.client;
      },
      (error) => {
        console.error('Erreur lors de la récupération des informations du client : ', error);
      }
    );
  }

  showEditForm(): void {
    this.editing = true;
  }

  updateClient(): void {
    // Avant de mettre à jour, formatez la date de naissance en format 'YYYY-MM-DD' pour la requête
    if (this.clientInfo.date_de_naissance instanceof Date) {
      this.clientInfo.date_de_naissance = formatDate(this.clientInfo.date_de_naissance, 'yyyy-MM-dd', 'en-US');
    }
    this.http.put<any>('http://localhost:3000/profil', this.clientInfo).subscribe(
      (response) => {
        console.log('Profil du client mis à jour avec succès');
        this.editing = false;
      },
      (error) => {
        console.error('Erreur lors de la mise à jour du profil du client : ', error);
      }
    );
  }
  

}
