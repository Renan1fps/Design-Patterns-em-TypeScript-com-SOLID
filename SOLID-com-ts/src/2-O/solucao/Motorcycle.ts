import { IMotorcycle } from "./IMotorcycle";

export class MotorCycle implements IMotorcycle {
  constructor(color: string, year: number, engine: number) {
    this.configure(color, year, engine);
  }
  startVehicle(): void {
    console.log("Ligando Motor");
  }
  configure(color: string, year: number, engine: number): void {
    console.log(`Criando uma moto com a cor ${color}, motor ${engine}, e ano ${year}`);
    this.startVehicle();
  }
}
