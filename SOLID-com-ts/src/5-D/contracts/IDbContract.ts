export interface IDbContract {

  getById(productId: number): string;
  deleteById?(product: number): string;
}
