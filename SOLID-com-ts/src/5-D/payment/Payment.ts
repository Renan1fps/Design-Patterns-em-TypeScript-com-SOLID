import { DbFactory } from "../factory/DbFactory";

export class Payment {
  pay(productId: number): void {
    const dbProduct = DbFactory.create();
    const product = dbProduct.getById(productId);
    console.log(product);
  }
}
