import { IVehicle } from "../problema/IVehicle";

export class Motorcycle implements IVehicle {
  constructor(color: string, year: number, engine: number) {
    this.configurationMotorcycle(color, year, engine);
  }
  startVehicle(): void {
    console.log("Ligando motor da moto.");
  }
  configurationMotorcycle(color: string, year: number, engine: number): void {
    console.log(`Moto como cor ${color}, ano ${year}, e motor ${engine}`);
    this.startVehicle();
  }
}
