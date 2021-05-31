import { IPayment } from "./IPayment";

export abstract class NubankCard implements IPayment {
  validate(): void {
    console.log("Realizando validação basica");
  }
  collectPayment(): void {
    console.log("Realizando pagamento ");
  }
}
