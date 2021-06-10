import { IDbContract } from "../contracts/IDbContract";

export class PostgreSQL implements IDbContract {
  getById(productId: number): string {
    return `POstgreSQL: product id ${productId}`;
  }
}
