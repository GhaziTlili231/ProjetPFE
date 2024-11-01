import { Component, OnInit } from '@angular/core';
import { AdminService } from '../../admin.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-admint',
  templateUrl: './admint.component.html',
  styleUrls: ['./admint.component.css']
})
export class AdmintComponent implements OnInit {
  admins: any[] = [];
  newAdmin: any = { id: 0, email: '', password: '' };
  editedAdmin: any = { id: 0, email: '', password: '' };
  isEditing = false;
  isNewAdmin = false;

  constructor(private adminService: AdminService) {}

  ngOnInit(): void {
    this.getAdmins();
  }

  getAdmins(): void {
    this.adminService.getAdmins()
      .subscribe(
        (admins: any[]) => {
          this.admins = admins;
        },
        (error: HttpErrorResponse) => {
          console.error('Erreur lors de la récupération des administrateurs : ', error);
        }
      );
  }
  saveNewAdmin(): void {
    if (this.newAdmin.email && this.newAdmin.password) {
      this.adminService.addAdmin({
        adresse_mail: this.newAdmin.email,
        mot_de_passe: this.newAdmin.password
      })
      .subscribe(
        () => {
          this.getAdmins();
          this.newAdmin = { id: 0, email: '', password: '' };
          this.isNewAdmin = false;
        }
      );
    } else {
      console.error('Adresse email ou mot de passe manquant');
    }
  }
  
  
  

  editAdmin(admin: any): void {
    this.editedAdmin = { ...admin };
    this.isEditing = true;
  }

  saveAdmin(): void {
    this.adminService.updateAdmin(this.editedAdmin)
      .subscribe(
        () => {
          this.getAdmins();
          this.isEditing = false;
        },
        (error: HttpErrorResponse) => {
          console.error('Erreur lors de la modification de l\'administrateur : ', error);
        }
      );
  }

  cancelEdit(): void {
    this.editedAdmin = { id: 0, email: '', password: '' };
    this.isEditing = false;
    this.isNewAdmin = false;
  }

  deleteAdmin(id: number): void {
    this.adminService.deleteAdmin(id)
      .subscribe(
        () => this.getAdmins(),
        (error: HttpErrorResponse) => {
          if (error.error instanceof ErrorEvent) {
            // Erreur côté client
            console.error('Une erreur s\'est produite : ', error.error.message);
          } else {
            // Erreur côté serveur
            if (error.status === 200) {
              console.error('Suppression réussie, mais la réponse est vide.');
            } else {
              console.error(`Erreur ${error.status}: ${error.error}`);
            }
          }
        }
      );
  }



  showNewAdminForm(): void {
    this.isNewAdmin = true;
  }
}
