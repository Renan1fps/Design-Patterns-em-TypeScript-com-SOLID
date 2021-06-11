import { IVehicle } from "./interface/IVehicle";

export class Bike implements IVehicle {
  startRoute(): void {
    this.getCargo();
    console.log("começando trajeto");
  }
  getCargo(): void {
    console.log("Pegando encomenda para entregar.");
  }
}
