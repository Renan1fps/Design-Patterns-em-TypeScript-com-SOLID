export default class Vehicle {
  constructor(
    private color: string,
    private year: number,
    private engine: number,
    private seats: number,
    private doors: number
  ) {}

  car(): void {
    console.log(
      `Criando um carro com a cor ${this.color}, ${this.doors} portas, motor ${this.engine}, e ano ${this.year}`
    );
    this.startVehicle();
  }
  motorcycle(): void {
    console.log(
      `Criando uma moto com a cor ${this.color}, motor ${this.engine}, e ano ${this.year}`
    );
    this.startVehicle()
  }
  startVehicle(): void {
    console.log("Ligando os motores");
  }
}
