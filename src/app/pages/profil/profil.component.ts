import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrl: './profil.component.scss'
})
export class ProfilComponent {
  heureActuelle: string="";
  heureReveil: string = "00:00"; // Initialiser avec une valeur par défaut

  constructor() {
    // Initialiser l'heure actuelle lors de la création du composant
    this.mettreAJourHeure();

    // Mettre à jour l'heure toutes les secondes
    setInterval(() => {
      this.mettreAJourHeure();
      this.verifierHeureReveil();
    }, 1000);
  }

  mettreAJourHeure() {
    // Obtenir l'heure actuelle
    const date = new Date();
    
    // Formater l'heure en HH:mm:ss (24 heures)
    this.heureActuelle = date.toLocaleTimeString('fr-FR');
  }

  verifierHeureReveil() {
    // Comparer l'heure actuelle avec l'heure de réveil
    if (this.heureActuelle === this.heureReveil) {
      alert("Réveil !");
      // Vous pouvez également déclencher d'autres actions ici
    }
  }
  
}
