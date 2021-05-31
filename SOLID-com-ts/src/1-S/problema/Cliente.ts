export default class Cliente {
  constructor(
    private name: string,
    private email: string,
    private age: number
  ) {}

  sendEmail(email: string): boolean {
    console.log("Enviar email");
    return true;
  }
}

/*Essa classe tem duas responsabilidades, ser uma pessoa e enviar Email, assim ela estaria sendo exposta a conexoes com o mundo externo.... */