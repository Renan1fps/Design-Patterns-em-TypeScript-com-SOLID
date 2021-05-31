import { TypeVehicle } from "../problema/TypeVehicle";
import { Car } from "./Car";
import { MotorCycle } from "./Motorcycle";

const type = TypeVehicle.CAR;
let vehicle;

if (type === TypeVehicle.CAR) {
  vehicle = new Car("branco", 2010, 2.0, 4, 4);
} else if (type === TypeVehicle.MOTOCYCLE) {
  vehicle = new MotorCycle("preto", 2010, 2.0);
}
