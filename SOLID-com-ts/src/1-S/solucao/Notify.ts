import Cliente from "./Cliente";

export default class Notify {
  constructor(private client: Cliente) {}

  sendEmail(): boolean {
    console.log(`enviando Email para ${this.client.email}`);
    return true;
  }
}
