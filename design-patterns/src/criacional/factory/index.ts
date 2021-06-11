import { BikeTransport } from "./transport/BikeTransport";
import { CarTransport } from "./transport/CarTransport";
import { MotorcycleTransport } from "./transport/MotorcycleTransport";
import { Transport } from "./transport/Transport";

let transportSelected = new MotorcycleTransport();
let typeTransport: Transport;

if (transportSelected) {
  typeTransport = transportSelected;
  typeTransport.startTransport();
} else {
  console.log("transportes não disponíveis no momento!");
}
