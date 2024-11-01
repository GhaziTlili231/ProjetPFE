import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AdminService } from '../../admin.service';

@Component({
  selector: 'app-pieces',
  templateUrl: './pieces.component.html',
  styleUrls: ['./pieces.component.css']
})
export class PiecesComponent implements OnInit {
  pieces: any[] = [];
  pieceToEdit: any = null;
  editedPiece: any = null;
  isEditing: boolean = false;
  isAdding: boolean = false;
  newPiece: any = {};

  constructor(private http: HttpClient, private adminService: AdminService) { }

  ngOnInit(): void {
    this.getPieces();
  }

  getPieces(): void {
    this.http.get<any[]>('http://localhost:3000/pieces').subscribe(data => {
      this.pieces = data;
    });
  }

  editPiece(piece: any): void {
    this.pieceToEdit = piece;
    this.editedPiece = { ...piece };
    this.editedPiece.prix = parseFloat(this.editedPiece.prix).toFixed(2); // Formatage du prix en tant que nombre décimal avec 2 décimales
    this.isEditing = true;
  }

  savePiece(): void {
    if (!this.editedPiece || !this.editedPiece.id) {
        console.error('Aucune pièce à éditer');
        return;
    }

    console.log('Piece à envoyer:', this.editedPiece); // Ajout du console.log ici

    this.http.put<any>(`http://localhost:3000/pieces/${this.editedPiece.id}`, this.editedPiece)
        .subscribe(response => {
            console.log('Response from server:', response);
            this.getPieces();
            this.cancelEdit();
            console.log('Piece saved');
        }, error => {
            console.error('Error saving piece:', error);
        });
}


  cancelEdit(): void {
    this.pieceToEdit = null;
    this.editedPiece = null;
    this.isEditing = false;
    console.log('Edit cancelled');
  }

  supprimerPiece(id: number): void {
    if (confirm('Êtes-vous sûr de vouloir supprimer cette pièce ?')) {
      this.http.delete(`http://localhost:3000/pieces/${id}`).subscribe(() => {
        this.getPieces();
        this.cancelEdit();
        console.log('Piece deleted');
      });
    }
  }

  ajouterPiece(): void {
    this.newPiece = {};
    this.isAdding = true;
  }

  saveNewPiece(): void {
    this.adminService.ajouterPiece(this.newPiece).subscribe(
      (response: any) => {
        console.log('Nouvelle pièce ajoutée avec succès');
        this.getPieces();
        this.isAdding = false;
        this.newPiece = {};
      },
      (error: any) => {
        console.error('Erreur lors de l\'ajout de la pièce : ' + error.message);
      }
    );
  }

  cancelAdd(): void {
    this.isAdding = false;
    this.newPiece = {};
  }
}
