import { ICar } from "./ICar";

export class Car implements ICar {
  constructor(
    color: string,
    year: number,
    engine: number,
    seats: number,
    doors: number
  ) {
    this.configure(color, year, engine, seats, doors);
  }

  startVehicle(): void {
    console.log("Ligando os motores");
  }
  configure(
    color: string,
    year: number,
    engine: number,
    seats: number,
    doors: number
  ): void {
    console.log(
      `Criando um carro com a cor ${color}, ${doors} portas, motor ${engine}, e ano ${year} e ${seats} assentos`
    );
    this.startVehicle();
  }
}
