import { IVehicle } from "./interface/IVehicle";

export class Car implements IVehicle {
  startRoute(): void {
    this.getCargo()
    console.log("Começando a rota.")
  }
  getCargo(): void {
    console.log("Pegando passageiro.");
  }
}
