interface ICar {
  startVehicle(): void;
  configurationCar(
    color: string,
    year: number,
    engine: number,
    seats: number
  ): void;
}
export { ICar };
