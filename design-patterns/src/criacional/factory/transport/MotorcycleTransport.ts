import { Transport } from "./Transport";
import { IVehicle } from "./vehicles/interface/IVehicle";
import { Motorcycle } from "./vehicles/Motorcylce";

export class MotorcycleTransport extends Transport {
  protected createTransport(): IVehicle {
    return new Motorcycle();
  }
}
