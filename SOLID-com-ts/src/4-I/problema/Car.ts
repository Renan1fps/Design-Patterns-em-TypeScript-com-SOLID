import { IVehicle } from "./IVehicle";
export class Car implements IVehicle {

  constructor(color: string, year: number, engine: number, seats: number) {
    this.configurationCar(color, year, engine, seats);
  }

  startVehicle(): void {
    console.log("Ligando os motores!");
  }
  configurationCar(
    color: string,
    year: number,
    engine: number,
    seats: number
  ): void {
    console.log(
      `carro com cor: ${color}, ano: ${year}, motor ${engine}, e com ${seats} assentos`
    );
    this.startVehicle()
  }
  configurationMotorcycle(color: string, year: number, engine: number): void {
    throw new Error("Method not implemented.");
  }
}
