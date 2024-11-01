import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UtilisateurService } from '../../../../views/utulisateur/utilisateur.service';

@Component({
  selector: 'app-acceuiladmin',
  templateUrl: './acceuiladmin.component.html',
  styleUrls: ['./acceuiladmin.component.css']
})
export class AcceuiladminComponent implements OnInit {
  clients: any[] = [];
  comptesCreesAujourdhui: number = 0;
  pourcentageHommes: number = 0;
  pourcentageFemmes: number = 0;
  sommeAujourdhui: number = 0; // Définir la valeur par défaut
  sommeMoins: number = 0; // Définir la valeur par défaut
  tranchesAges: any = {
    age_18_25: 0,
    age_26_45: 0,
    age_46_60: 0,
    age_over_60: 0
  };
  isEditing: boolean = false;
  userToEdit: any = null;
  editedUser: any = null;
  newClient: any = {}; // Initialise newClient avec un objet vide
  isAdding: boolean = false; // Désactivez le mode d'ajout par défaut

  constructor(private http: HttpClient, private utilisateurService: UtilisateurService) { }

  ngOnInit(): void {
    this.fetchClients();
    this.fetchSommesPrix();
  }

  fetchClients() {
    this.http.get<any[]>('http://localhost:3000/utilisateur')
      .subscribe(clients => {
        this.clients = clients;
        this.calculerComptesCreesAujourdhui();
        this.calculerPourcentageHommesFemmes();
        this.calculerTranchesAges();
      });
  }

  supprimerUtilisateur(id: number) {
    if (confirm('Êtes-vous sûr de vouloir supprimer cet utilisateur ?')) {
        this.http.delete(`http://localhost:3000/utilisateur/${id}`, { responseType: 'text' })
            .subscribe((response) => {
                console.log(response); // Affiche la réponse texte du serveur
                this.fetchClients();
            }, error => {
                console.error('Erreur lors de la suppression de l\'utilisateur :', error);
                alert('Une erreur s\'est produite lors de la suppression de l\'utilisateur.');
            });
    }
}





  calculerComptesCreesAujourdhui() {
    const dateActuelle = new Date();
    this.comptesCreesAujourdhui = this.clients.filter(client => {
      const dateCreation = new Date(client.date_creation);
      return dateCreation.getDate() === dateActuelle.getDate() &&
             dateCreation.getMonth() === dateActuelle.getMonth() &&
             dateCreation.getFullYear() === dateActuelle.getFullYear();
    }).length;
  }

  calculerPourcentageHommesFemmes() {
    const totalHommes = this.clients.filter(client => client.genre === 'Masculin').length;
    const totalFemmes = this.clients.filter(client => client.genre === 'Féminin').length;
    const totalClients = this.clients.length;

    if (totalClients > 0) {
      this.pourcentageHommes = (totalHommes / totalClients) * 100;
      this.pourcentageFemmes = (totalFemmes / totalClients) * 100;

      if (this.pourcentageHommes > 100) {
        this.pourcentageHommes = 100;
      }
      if (this.pourcentageFemmes > 100) {
        this.pourcentageFemmes = 100;
      }
    } else {
      this.pourcentageHommes = 0;
      this.pourcentageFemmes = 0;
    }
  }

  calculerTranchesAges() {
    const totalClients = this.clients.length;

    let age_18_25 = 0;
    let age_26_45 = 0;
    let age_46_60 = 0;
    let age_over_60 = 0;

    this.clients.forEach(client => {
        const age = this.calculateAge(client.date_de_naissance);
        if (age >= 18 && age <= 25) {
            age_18_25++;
        } else if (age >= 26 && age <= 45) {
            age_26_45++;
        } else if (age >= 46 && age <= 60) {
            age_46_60++;
        } else {
            age_over_60++;
        }
    });

    if (totalClients > 0) {
        this.tranchesAges.age_18_25 = parseFloat((age_18_25 / totalClients * 100).toFixed(2));
        this.tranchesAges.age_26_45 = parseFloat((age_26_45 / totalClients * 100).toFixed(2));
        this.tranchesAges.age_46_60 = parseFloat((age_46_60 / totalClients * 100).toFixed(2));
        this.tranchesAges.age_over_60 = parseFloat((age_over_60 / totalClients * 100).toFixed(2));
    } else {
        this.tranchesAges.age_18_25 = 0;
        this.tranchesAges.age_26_45 = 0;
        this.tranchesAges.age_46_60 = 0;
        this.tranchesAges.age_over_60 = 0;
    }
}

calculateAge(dateOfBirth: string): number {
    const today = new Date();
    const birthDate = new Date(dateOfBirth);
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();

    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }

    return age;
}

editUser(user: any): void {
    this.editedUser = { ...user };
    this.isEditing = true;
}

updateUser(): void {
    if (this.editedUser) {
        delete this.editedUser.date_creation;

        this.utilisateurService.updateUser(this.editedUser).subscribe(() => {
            this.fetchClients();
            this.cancelEdit();
            console.log('User updated');
        }, error => {
            console.error('Error updating user:', error);
        });
    }
}

cancelEdit(): void {
    this.isEditing = false;
    this.editedUser = null;
    console.log('Edit cancelled');
}

ajouterClient(): void {
    this.newClient = {}; // Initialise newClient avec un objet vide
    this.isAdding = true; // Activer le mode d'ajout
}

saveNewClient(): void {
  this.utilisateurService.ajouterClient(this.newClient).subscribe(
    (response: any) => {
      console.log('Nouveau client ajouté avec succès');
      this.fetchClients();
      this.isAdding = false; // Désactiver le mode d'ajout après l'ajout réussi
    },
    (error: any) => {
      console.error('Erreur lors de l\'ajout du client : ' + error.message);
            this.isAdding = false; // Désactiver le mode d'ajout après l'ajout réussi

    }
  );
}
fetchSommesPrix() {
  const url = 'http://localhost:3000/sommesPrix';
  this.http.get<any>(url).subscribe(
    (data: any) => {
      this.sommeAujourdhui = data.somme_aujourd_hui;
      this.sommeMoins = data.somme_moins;
    },
    (error: any) => {
      console.error('Erreur lors de la récupération des sommes des prix : ' + JSON.stringify(error));
    }
  );
}




cancelAdd(): void {
    this.isAdding = false;
    this.newClient = {}; // Réinitialisez l'objet newClient en cas d'annulation
}

}
