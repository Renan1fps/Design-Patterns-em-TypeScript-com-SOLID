import { NubankCard } from "./NubankCard";

export class DebitCard extends NubankCard {
  validate(): void {
    console.log("Verificando se a saldo suficiente");
  }
}
