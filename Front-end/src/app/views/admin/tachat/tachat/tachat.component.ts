import { Component, OnInit } from '@angular/core';
import { AdminService } from '../../admin.service';

@Component({
  selector: 'app-tachat',
  templateUrl: './tachat.component.html',
  styleUrls: ['./tachat.component.css']
})
export class TachatComponent implements OnInit {
  achats: any[] = [];
  nouvelAchat: any = {};
  achatAModifier: any;

  isNewAchat: boolean = false;

  constructor(private adminService: AdminService) {}

  ngOnInit(): void {
    this.getAchats();
  }

  getAchats(): void {
    this.adminService.getAchats()
      .subscribe(achats => {
        this.achats = achats;
      });
  }
  

  editAchat(achat: any): void {
    this.achatAModifier = { ...achat };
  }

  cancelEdit(): void {
    this.achatAModifier = null;
  }

  saveAchat(): void {
    this.adminService.updateAchat(this.achatAModifier)
      .subscribe(() => {
        this.cancelEdit();
        this.getAchats();
      });
  }

  showNewAchatForm(): void {
    this.isNewAchat = true;
    this.nouvelAchat = {};
  }

  cancelNewAchat(): void {
    this.isNewAchat = false;
    this.nouvelAchat = {};
  }

  saveNewAchat(): void {
    this.adminService.ajouterAchat(this.nouvelAchat)
      .subscribe(() => {
        this.cancelNewAchat();
        this.getAchats(); // Récupérer à nouveau la liste des achats après l'ajout
      });
  }
  

  deleteAchat(id: number): void {
    this.adminService.supprimerAchat(id)
      .subscribe(() => {
        this.getAchats();
      });
  }

 
}  