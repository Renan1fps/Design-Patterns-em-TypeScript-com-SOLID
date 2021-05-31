import { TypeVehicle } from "./TypeVehicle";
import Vehicle from "./Vehicle";

const type = TypeVehicle.CAR;
let vehicle;

if (type === TypeVehicle.CAR) {
  vehicle = new Vehicle("branco", 2010, 2.0, 4, 4);
  vehicle.car();
} else if (type === TypeVehicle.MOTOCYCLE) {
  vehicle = new Vehicle("preto", 2010, 2.0, 1, 0);
  vehicle.motorcycle();
}

/*Qual o problema? eu sou obrigado a passar o tanto de assentos mesmo que meu veículo seja uma moto, o mesmo serve para portas, e se depois chegasse um novo veiculo, como um caminhao ou uma bicicleta? */