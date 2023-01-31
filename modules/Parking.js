import Vehicules from "./Vehicules.js";

export class Parking {
  constructor(formulaire, tableauHtmlResultat) {
    this.Vehicules = [];
    this.formulaire = formulaire;
    this.tableauHtmlResultat = tableauHtmlResultat;
    console.log(this.formulaire);
  }

  ajouter() {
    this.formulaire.addEventListener("submit", (e) => {
      e.preventDefault();
      console.log(Vehicules);
      this.ajouter();
    });
  }
}
