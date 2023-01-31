import { Parking } from "./modules/Parking.js";

let form = document.querySelector("#formVehicules");
let result = document.querySelector("#result");

let Vehicule = new Parking(form, result);

Vehicule.demarrer();
