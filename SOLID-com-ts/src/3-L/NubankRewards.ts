import { IPayment } from "./IPayment";

export class NubankRewards implements IPayment{
    validate(): void {
      console.log("Verificando se há pontos")
    }
    collectPayment(): void {
       console.log("Realizando pagamento com pontos.")
    }
    
}