import { IVehicle } from "./interface/IVehicle";

export class Motorcycle implements IVehicle {
  startRoute(): void {
    this.getCargo();
    console.log("Iniciando trajeto para entrega.");
  }
  getCargo(): void {
    console.log("Pegando encomenda.");
  }
}
