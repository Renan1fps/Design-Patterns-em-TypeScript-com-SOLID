import { IDbContract } from "../contracts/IDbContract";

export class MYySQL implements IDbContract {
  getById(productId: number): string {
     return `MySQL: product ${productId}`
  }
  
}
